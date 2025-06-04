import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { groceryApi } from '../services/api';
import type { CreateGroceryItem, GroceryItem, UpdateGroceryItem } from '../types/grocery';

const QUERY_KEYS = {
  groceryItems: ['groceryItems'],
};

export const useGroceryItems = () => {
  return useQuery({
    queryKey: QUERY_KEYS.groceryItems,
    queryFn: groceryApi.getGroceryItems,
  });
};

export const useCreateGroceryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: CreateGroceryItem) => groceryApi.createGroceryItem(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.groceryItems });
    },
  });
};

export const useUpdateGroceryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (item: UpdateGroceryItem) => groceryApi.updateGroceryItem(item),
    onSuccess: (updatedItem) => {
      const cachedGroceryItems = queryClient.getQueryData<GroceryItem[]>(QUERY_KEYS.groceryItems);
      const updatedGroceryItems = cachedGroceryItems?.map((groceryItem) =>
        groceryItem.id === updatedItem.id ? updatedItem : groceryItem
      );
      queryClient.setQueryData(QUERY_KEYS.groceryItems, updatedGroceryItems);
    },
  });
};

export const useDeleteGroceryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => groceryApi.deleteGroceryItem(id),
    onSuccess: (_, id) => {
      const cachedGroceryItems = queryClient.getQueryData<GroceryItem[]>(QUERY_KEYS.groceryItems);
      const updatedGroceryItems = cachedGroceryItems?.filter((item) => item.id !== id);
      queryClient.setQueryData(QUERY_KEYS.groceryItems, updatedGroceryItems);
    },
  });
}; 