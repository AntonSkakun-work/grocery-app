export interface GroceryItem {
  id: number;
  title: string;
  amount: string;
  bought: boolean;
}

export interface CreateGroceryItem {
  title: string;
  amount: string;
  bought?: boolean;
}

export interface UpdateGroceryItem {
  id: number;
  title?: string;
  amount?: string;
  bought?: boolean;
} 