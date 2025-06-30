
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import Header from "@/components/landing/Header";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-accent/20 font-inter">
      <Header />
      <div className="pt-20 pb-16 px-4 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {/* Main Auth Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-scale-in">
            {/* Header Section */}
            <div className="px-8 pt-8 pb-6 text-center bg-gradient-to-r from-primary/5 to-accent/10">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 animate-fade-in">
                <User className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-deep-black mb-2">
                {isSignUp ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="text-muted-text">
                {isSignUp ? "Join thousands finding jobs with AI" : "Sign in to continue your job search"}
              </p>
            </div>

            {/* Form Section */}
            <div className="px-8 py-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field - Only for Sign Up */}
                {isSignUp && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="name" className="text-deep-black font-medium">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-text" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 h-12 border-2 border-gray-200 focus:border-primary transition-all duration-300 rounded-xl"
                        required={isSignUp}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-deep-black font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-text" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-2 border-gray-200 focus:border-primary transition-all duration-300 rounded-xl"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-deep-black font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-text" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-12 border-2 border-gray-200 focus:border-primary transition-all duration-300 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-text hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-muted-text text-sm">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 hover:bg-gray-50 transition-all duration-300 rounded-xl"
                >
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5 mr-3" />
                  Continue with Google
                </Button>
              </div>

              {/* Toggle Sign Up/Sign In */}
              <div className="mt-6 text-center">
                <p className="text-muted-text">
                  {isSignUp ? "Already have an account?" : "Don't have an account?"}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="ml-2 text-primary font-semibold hover:underline transition-all duration-300"
                  >
                    {isSignUp ? "Sign In" : "Sign Up"}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-6 text-sm text-muted-text">
            By continuing, you agree to our{" "}
            <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
            {" "}and{" "}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
