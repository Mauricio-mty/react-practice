# React Practice

A React application built with TypeScript and Vite for practicing React components, state management, and routing.

## Features

- **Components**: Reusable UI components including Button, CheckBox, Input, RadioButton, and Select.
- **Pages**: Home and Write pages demonstrating component usage.
- **Routing**: Client-side routing using React Router DOM.
- **TypeScript**: Full TypeScript support for type safety.
- **ESLint**: Configured for code quality and consistency.

## Technologies Used

- React 19
- TypeScript
- Vite
- React Router DOM
- ESLint
- Node.js v22.16.0

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-practice
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Scripts

- `npm run dev`: Start the development server with hot reload.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code issues.
- `npm run preview`: Preview the production build locally.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Button.tsx
│   ├── CheckBox.tsx
│   ├── Input.tsx
│   ├── RadioButton.tsx
│   └── Select.tsx
├── pages/          # Page components
│   ├── Home.tsx
│   └── Write.tsx
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```
