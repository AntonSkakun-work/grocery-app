# Grocery List App

A modern, responsive grocery list application built with React, TypeScript, and TailwindCSS. This app allows users to manage their grocery lists with full CRUD functionality and a clean, intuitive interface.

## Features

### ✅ User Stories Implemented

- **View grocery list**: Browse all items in your grocery list
- **Add items**: Add new items with custom amounts to your list
- **Edit items**: Inline editing of item names and amounts
- **Delete items**: Remove items from your list
- **Mark as bought**: Check off items as completed with visual feedback (strikethrough text)
- **Amount tracking**: Add specific amounts for each item (e.g., "2 kg", "1 gallon")

### 🎨 Additional Features

- **Responsive design**: Works perfectly on both desktop and mobile devices
- **Loading states**: Smooth loading indicators while fetching data
- **Error handling**: Graceful error handling with retry functionality
- **Optimistic updates**: Instant UI feedback using React Query
- **Organized view**: Separate sections for "To Buy" and "Completed" items
- **Progress tracking**: View count of remaining vs completed items
- **Modern UI**: Clean, accessible interface using shadcn/ui components

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **State Management**: TanStack React Query for server state
- **API Mocking**: JSON Server for backend simulation
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Development**: TypeScript with strict mode

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd grocery-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development servers:
   ```bash
   # Option 1: Start both servers with one command
   npm run dev:full
   
   # Option 2: Start manually in separate terminals
   # Terminal 1 - Start JSON Server (API)
   npm run server
   
   # Terminal 2 - Start Vite dev server
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

The JSON Server will run on `http://localhost:3002` and provide the API endpoints.

## API Endpoints

The JSON Server provides the following endpoints:

- `GET /groceryItems` - Get all grocery items
- `POST /groceryItems` - Create a new grocery item
- `PATCH /groceryItems/:id` - Update a grocery item
- `DELETE /groceryItems/:id` - Delete a grocery item

## Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI components (Button, Input, Card, etc.)
│   ├── GroceryItem.tsx   # Individual grocery item component
│   ├── GroceryForm.tsx   # Form for adding new items
│   └── GroceryList.tsx   # Main list component
├── hooks/
│   └── useGrocery.ts     # React Query hooks for API operations
├── services/
│   └── api.ts            # API service functions
├── types/
│   └── grocery.ts        # TypeScript type definitions
├── lib/
│   └── utils.ts          # Utility functions
├── App.tsx               # Main app component
└── main.tsx              # App entry point
```

## Component Architecture

### GroceryList
- Main container component
- Handles loading and error states
- Organizes items into "To Buy" and "Completed" sections
- Displays progress information

### GroceryItem
- Displays individual grocery items
- Handles inline editing functionality
- Toggle bought/unbought state
- Delete functionality

### GroceryForm
- Form for adding new grocery items
- Input validation and submission
- Automatic form reset after successful submission

## Development Features

- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **React Query DevTools**: Debug server state in development
- **ESLint**: Code quality and consistency
- **Responsive Design**: Mobile-first approach with TailwindCSS

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.


