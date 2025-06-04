import { useMutation, useQueryClient } from '@tanstack/react-query';
import { groceryApi } from '@/services/api';
import type { GroceryItem } from '@/types/grocery';
import { QUERY_KEYS } from '@/constants/queryKeys';

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