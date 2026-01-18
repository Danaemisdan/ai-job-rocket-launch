"use client"

import React, { useEffect, useRef, useState } from 'react'

// Vector2 class implementation
class Vector2 {
    x: number
    y: number

    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }
    set(x: number, y: number) {
        this.x = x
        this.y = y
        return this
    }
    copy(v: Vector2) {
        this.x = v.x
        this.y = v.y
        return this
    }
    subVectors(a: Vector2, b: Vector2) {
        this.x = a.x - b.x
        this.y = a.y - b.y
        return this
    }
}

// Pointer class for handling interactions
class Pointer {
    canvas: HTMLCanvasElement
    opt: { scaleMin: number; scaleMax: number; pressureMax: number; pressureDuration: number }
    pressCheckInterval: number
    deltaPressure: number
    position: Vector2
    zoomSpeed: number
    scale: number
    isPressing: boolean
    pressure: number

    constructor(canvas: HTMLCanvasElement, options: { scaleMin?: number; scaleMax?: number; pressureMax?: number; pressureDuration?: number } = {}) {
        const { scaleMin = 0.01, scaleMax = 10.0, pressureMax = 1.0, pressureDuration = 1000 } = options
        this.canvas = canvas
        this.opt = { scaleMin, scaleMax, pressureMax, pressureDuration }
        this.pressCheckInterval = 20
        this.deltaPressure = this.opt.pressureMax / this.opt.pressureDuration * this.pressCheckInterval
        this.position = new Vector2()
        this.zoomSpeed = 1.0
        this.scale = 1.0
        this.isPressing = false
        this.pressure = 0.0
        this.setupEventListeners()
    }

    updatePosition(clientX: number, clientY: number) {
        const rect = this.canvas.getBoundingClientRect()
        const size = Math.min(rect.width, rect.height)
        this.position.x = ((clientX - rect.left) * 2 - rect.width) / size
        this.position.y = ((rect.height - (clientY - rect.top)) * 2 - rect.height) / size
    }

    setupEventListeners() {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            const x = 'touches' in e ? e.touches[0].clientX : e.clientX
            const y = 'touches' in e ? e.touches[0].clientY : e.clientY
            this.updatePosition(x, y)
        }
        const handleDown = (e: MouseEvent | TouchEvent) => {
            if (e instanceof MouseEvent && e.button !== 0) return
            this.isPressing = true
            if ('touches' in e) this.updatePosition(e.touches[0].clientX, e.touches[0].clientY)
        }
        const handleUp = () => { this.isPressing = false }

        this.canvas.addEventListener('mousemove', handleMove)
        this.canvas.addEventListener('touchmove', handleMove)
        this.canvas.addEventListener('mousedown', handleDown)
        this.canvas.addEventListener('touchstart', handleDown)
        this.canvas.addEventListener('mouseup', handleUp)
        this.canvas.addEventListener('touchend', handleUp)
    }
}

interface FluidAnimationProps {
    width?: string
    height?: string
    backgroundColor?: string
    seed?: number | null
    complexity?: number
    mouseSpeed?: number
    fixedOffset?: number
    fluidSpeed?: number
    baseColor?: number
    blur?: number
    morphSpeed?: number
    style?: React.CSSProperties
    className?: string
}

export function FluidAnimation({
    width = "100%",
    height = "100%",
    backgroundColor = "black",
    seed = null,
    complexity = 10,
    mouseSpeed = 0.3,
    fixedOffset = 0.7,
    fluidSpeed = 0.07,
    baseColor = 0.6,
    blur = 0.47,
    style = {},
    className = ""
}: FluidAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const pointerRef = useRef<Pointer | null>(null)
    const animationRef = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const gl = canvas.getContext('webgl')
        if (!gl) return

        const actualSeed = seed || (new Date().getTime() % 100000)
        const pointer = new Pointer(canvas)
        pointerRef.current = pointer

        const vertexShaderSource = `
      attribute vec2 position;
      void main () { gl_Position = vec4(position, 0, 1); }
    `

        const fragmentShaderSource = `
      precision mediump float;
      #define SEED ${actualSeed}.579831
      uniform vec2 uResolution;
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMorph;
      uniform vec2 uGrid;
      const int complexity = ${complexity};
      const float mouseSpeed = ${mouseSpeed.toFixed(2)};
      const float fixedOffset = ${fixedOffset.toFixed(2)};
      const float fluidSpeed = ${fluidSpeed.toFixed(2)};
      const float baseColor = ${baseColor.toFixed(2)};
      const float BLUR = ${blur.toFixed(2)};
      #define PI 3.14159
      float random(float x) { return fract(sin(x) * SEED); }
      float noise(float x) {
        float i = floor(x); float f = fract(x);
        return mix(random(i), random(i + 1.0), smoothstep(0.0, 1.0, f));
      }
      float noiseS(float x) { return noise(x) * 2.0 - 1.0; }
      void main() {
        vec2 p = (2.0 * gl_FragCoord.xy - uResolution) / min(uResolution.x, uResolution.y) * 0.7;
        float t = uTime * fluidSpeed + uMorph;
        float noiseSTime = noiseS(t);
        float noiseSTime1 = noiseS(t + 1.0);
        float blur = (BLUR + 0.14 * noiseSTime);
        for(int i=1; i <= complexity; i++) {
          p += blur / float(i) * sin(float(i) * p.yx + t + PI * vec2(noiseSTime, noiseSTime1)) + fixedOffset;
        }
        for(int i=1; i <= complexity; i++) {
          p += blur / float(i) * cos(float(i) * p.yx + t + PI * vec2(noiseSTime, noiseSTime1)) + fixedOffset;
        }
        p += uMouse * mouseSpeed;
        gl_FragColor = vec4(baseColor * vec3(sin(uGrid * 2.0 * p + vec2(2.0 * noiseSTime, 3.0 * noiseSTime1)), sin(p.x + p.y + noiseSTime)) + baseColor, 1.0);
      }
    `

        const createShader = (type: number, source: string) => {
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            return shader
        }

        const program = gl.createProgram()
        if (!program) return

        const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
        const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)
        if (!vertexShader || !fragmentShader) return

        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)

        const render = () => {
            const time = Date.now() * 0.01
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.useProgram(program)
            gl.uniform2f(gl.getUniformLocation(program, 'uResolution'), canvas.width, canvas.height)
            gl.uniform1f(gl.getUniformLocation(program, 'uTime'), time)
            gl.uniform2f(gl.getUniformLocation(program, 'uMouse'), pointer.position.x, pointer.position.y)
            gl.uniform1f(gl.getUniformLocation(program, 'uMorph'), 0)
            gl.uniform2f(gl.getUniformLocation(program, 'uGrid'), 0.32, 0.32)
            const posLoc = gl.getAttribLocation(program, 'position')
            gl.enableVertexAttribArray(posLoc)
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)
            gl.drawArrays(gl.TRIANGLES, 0, 6)
            animationRef.current = requestAnimationFrame(render)
        }

        const resize = () => {
            const r = canvas.getBoundingClientRect()
            canvas.width = r.width
            canvas.height = r.height
        }
        window.addEventListener('resize', resize)
        resize()
        render()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationRef.current)
        }
    }, [complexity, mouseSpeed, fixedOffset, fluidSpeed, baseColor, blur, seed])

    return (
        <div
            className={className}
            style={{ position: 'relative', width, height, backgroundColor, overflow: 'hidden', ...style }}
        >
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
    )
}
