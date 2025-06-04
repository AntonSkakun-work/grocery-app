import { useMutation, useQueryClient } from '@tanstack/react-query';
import { groceryApi } from '@/services/api';
import type { CreateGroceryItem} from '@/types/grocery';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useCreateGroceryItem = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: (item: CreateGroceryItem) => groceryApi.createGroceryItem(item),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY_KEYS.groceryItems });
      },
    });
  };