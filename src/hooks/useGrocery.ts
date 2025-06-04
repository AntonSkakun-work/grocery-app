import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { groceryApi } from '../services/api';
import type { CreateGroceryItem, UpdateGroceryItem } from '../types/grocery';

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.groceryItems });
    },
  });
};

export const useDeleteGroceryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => groceryApi.deleteGroceryItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.groceryItems });
    },
  });
}; 