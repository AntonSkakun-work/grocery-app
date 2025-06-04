import { useMutation, useQueryClient } from '@tanstack/react-query';
import { groceryApi } from '@/services/api';
import type { GroceryItem, UpdateGroceryItem } from '@/types/grocery';
import { QUERY_KEYS } from '@/constants/queryKeys';

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