# Vercel Persistence Setup Guide

To enable the " All-Users Persistence" feature for the Role Valuation tool, you must run the application connected to the Vercel backend.

## 1. Prerequisites
Ensure you have the Vercel CLI installed:
```bash
npm i -g vercel
```

## 2. Link Project
Run the following command in your terminal and follow the prompts to log in and link this project to your Vercel account:
```bash
vercel link
```

## 3. Pull Environment Variables
Download the necessary environment variables (including KV database credentials) to your local machine:
```bash
vercel env pull .env.local
```

## 4. Run with Database Support
Instead of `npm run dev`, use the new database-enabled command:
```bash
npm run dev:db
```

This will start the Vercel development server, which handles both the frontend and the `/api` backend correctly.
