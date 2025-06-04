import { GroceryUnit } from "@/constants/units";

export interface GroceryItem {
  id: string;
  title: string;
  amount: number;
  unit: GroceryUnit;
  bought: boolean;
}

export type CreateGroceryItem = Omit<GroceryItem, "id">;

export type UpdateGroceryItem = Pick<GroceryItem, "id"> &
  Partial<Omit<GroceryItem, "id">>;
