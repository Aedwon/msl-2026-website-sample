# Vercel Persistence Setup Guide (Generic Redis)

To enable " All-Users Persistence" for the Role Valuation tool using your existing Redis database.

## 1. Prerequisites
Ensure you have the Vercel CLI installed:
```bash
npm i -g vercel
```

## 2. Link Project
Run the following command in your terminal and follow the prompts to log in and link this project to your Vercel account:
```bash
npx vercel link
```

## 3. Pull Environment Variables
Download the necessary environment variables (this will pull your `REDIS_URL`):
```bash
npx vercel env pull .env.local
```

## 4. Run with Database Support
Run the application with the persistence layer enabled:
```bash
npm run dev:db
```

This will run the backend in a Node.js compatible environment and connect using your `REDIS_URL`.
