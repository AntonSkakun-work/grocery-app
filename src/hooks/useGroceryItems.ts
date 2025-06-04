import { useQuery} from '@tanstack/react-query';
import { groceryApi } from '@/services/api';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useGroceryItems = () => {
    return useQuery({
      queryKey: QUERY_KEYS.groceryItems,
      queryFn: groceryApi.getGroceryItems,
    });
  };
  