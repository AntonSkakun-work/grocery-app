export interface GroceryItem {
  id: string;
  title: string;
  amount: string;
  bought: boolean;
}

export type CreateGroceryItem = Omit<GroceryItem, 'id'> 

export type UpdateGroceryItem = Partial<GroceryItem> & {
  id: string;
};
