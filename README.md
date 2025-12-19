# Sapien Wine

An elegant online wine store and event booking platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🍷 **Wine Store**: Browse and purchase premium wines with detailed product pages
- 📅 **Event Booking**: Book wine tastings, dinners, and educational seminars
- 🛒 **Shopping Cart**: Full cart functionality with quantity management
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- 📱 **Mobile Friendly**: Fully responsive across all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── wines/             # Wine shop pages
│   ├── cart/              # Shopping cart
│   └── events/            # Event booking
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── WineCard.tsx       # Wine product card
├── context/               # React context providers
│   └── CartContext.tsx    # Shopping cart state
└── data/                  # Static data
    └── wines.ts           # Wine product data
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Notes

- Currently uses stock photos from Unsplash
- Cart state is managed in-memory (resets on page refresh)
- Event booking form shows a confirmation alert (backend integration needed for production)

## Build for Production

```bash
npm run build
npm start
```

