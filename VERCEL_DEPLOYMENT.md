
# Vercel Deployment Guide

## Current Pages
- Home Page → `/`
- Privacy Policy → `/privacypolicy`
- Terms and Conditions → `/terms`
- Sign In → `/signin`
- Sign Up → `/signup`

## Adding New Pages

When you create a new page (e.g., `/about`, `/pricing`, `/features`), follow these steps:

### 1. Create the React Component
Create your new page component in `src/pages/NewPage.tsx`

### 2. Add Route to App.tsx
Add the route in `src/App.tsx`:
```tsx
<Route path="/newpage" element={<NewPage />} />
```

### 3. Update vercel.json
Add a new rewrite rule in `vercel.json`:
```json
{ "source": "/newpage", "destination": "/" }
```

### Example vercel.json with new page:
```json
{
  "rewrites": [
    { "source": "/privacypolicy", "destination": "/" },
    { "source": "/terms", "destination": "/" },
    { "source": "/signin", "destination": "/" },
    { "source": "/signup", "destination": "/" },
    { "source": "/about", "destination": "/" },
    { "source": "/pricing", "destination": "/" }
  ]
}
```

### 4. Deploy
Redeploy to Vercel and your new page will work with direct URL access.

## File Structure
```
/ (Root Folder)
├── index.html
├── src/
│   ├── pages/
│   ├── components/
│   └── ...
├── public/
├── vercel.json
└── package.json
```

## Important Notes
- Never create physical folders for routes (like `/privacypolicy/` folder)
- All routing is handled client-side by React Router
- The `vercel.json` rewrites ensure direct URL access works
- Always add new routes to both `App.tsx` and `vercel.json`
