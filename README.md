# Fincart E-commerce Project

A modern e-commerce product listing application built with Next.js, TypeScript, and Zustand, featuring a responsive design, efficient state management, and optimized performance.

## Live Preview

Check out the live application: [Fincart E-commerce](https://fincart-ecommerce.vercel.app/)

## Features

### 1. Product Listing

- Fetches product data from the Platzi Fake Store API
- Implements infinite scrolling for optimal performance
- Displays products in a responsive grid layout
- Handles loading and error states gracefully

### 2. Shopping Cart

- Add/remove products from cart with real-time updates
- Persistent cart state across page reloads using LocalStorage
- Dynamic cart summary showing item count and total price
- Dedicated cart page for managing items

### 3. State Management & Performance

- Efficient state management using Zustand
- Optimized component re-renders
- Type-safe implementation with TypeScript
- Custom hooks for reusable logic

### 4. Search & Filtering

- Category-based filtering
- Search functionality with debounced API calls
- Optimized search experience
- Combined filters for enhanced product discovery

### 5. Project Structure

```
├── app/                    # Next.js app directory
├── components/
│   ├── cart/              # Cart-related components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── product/           # Product-related components
│   ├── skeletons/         # Loading skeleton components
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── store/                 # Zustand store configurations
└── types/                 # TypeScript type definitions
```

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
