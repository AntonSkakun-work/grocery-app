import type { GroceryItem, CreateGroceryItem, UpdateGroceryItem } from '../types/grocery';

const API_BASE_URL = 'http://localhost:3002';

export const groceryApi = {
  // Get all grocery items
  getGroceryItems: async (): Promise<GroceryItem[]> => {
    const response = await fetch(`${API_BASE_URL}/groceryItems`);
    if (!response.ok) {
      throw new Error('Failed to fetch grocery items');
    }
    return response.json();
  },

  // Create a new grocery item
  createGroceryItem: async (item: CreateGroceryItem): Promise<GroceryItem> => {
    const response = await fetch(`${API_BASE_URL}/groceryItems`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Failed to create grocery item');
    }
    return response.json();
  },

  // Update a grocery item
  updateGroceryItem: async (item: UpdateGroceryItem): Promise<GroceryItem> => {
    const response = await fetch(`${API_BASE_URL}/groceryItems/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Failed to update grocery item');
    }
    return response.json();
  },

  // Delete a grocery item
  deleteGroceryItem: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/groceryItems/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete grocery item');
    }
  },
}; 