# MSL Philippines Website

## Overview
This is the official repository for the MSL Philippines website. The platform serves as a digital hub for the student gaming community, designed to empower student leaders and gamers across the country. It provides resources, news, and tournament information to foster a supportive and competitive environment.

## Key Features

### Comprehensive Pages
The application includes a wide range of dedicated sections to serve different user needs:
- **Home**: The landing page featuring dynamic hero sections and proof of impact.
- **About**: Information about the organization's mission and vision.
- **Programs**: Detailed listings of tournaments, seminars, and campaigns.
- **Careers**: Opportunities for students to join the organization.
- **News**: Updates on the latest events and announcements.
- **Campus**: Resources specific to school communities.
- **Buffs & Support**: Tools and calculators for student organizations.
- **Partnerships**: Information for potential sponsors and collaborators.

### Interactive Elements
- **Event Carousels**: Engaging displays of ongoing and past events.
- **Trust Tickers**: Scrolling banners to showcase partners and values.
- **Testimonials**: Specific sections highlighting community feedback.

### Design System
The project utilizes a custom design system built with Tailwind CSS:
- **Color Palette**: Features a distinct "MSL Gold" (#F2C21A) and various dark shades for a premium, gamer-centric aesthetic.
- **Typography**: Uses a combination of Inter, Teko, and Orbitron fonts for a modern look.
- **Animations**: Includes custom keyframe animations for marquees and fade-ins.

### Accessibility
- **WCAG Compliance**: Adheres to accessibility standards with proper contrast ratios and focus states.
- **Reduced Motion**: Respects user preferences for reduced motion interactions.

## Technology Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (configured via CDN for this sample)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites
Ensure you have Node.js installed on your machine.

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development
To run the development server:
```bash
npm run dev
```

### Build
To build the application for production:
```bash
npm run build
```

## Project Structure
- **src/App.tsx**: The main entry point handling client-side routing and layout.
- **src/components/**: Directory containing all page components and reusable UI elements.
- **src/types.ts**: TypeScript definitions for data structures.
