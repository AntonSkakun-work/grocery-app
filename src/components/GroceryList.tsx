import { ShoppingCart, AlertCircle } from 'lucide-react';
import { GroceryItem } from '@/components/GroceryItem';
import { GroceryForm } from '@/components/GroceryForm';
import { Button } from '@/components/ui/button';
import { useGroceryItems } from '@/hooks/useGroceryItems';

export const GroceryList = () => {
  const { data: groceryItems, isLoading, isError, error, refetch } = useGroceryItems();

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto p-4 space-y-6">
        <div className="text-center">
          <div className="animate-pulse">
            <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground">Loading your grocery list...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container max-w-4xl mx-auto p-4 space-y-6">
        <div className="text-center space-y-4">
          <AlertCircle className="h-8 w-8 mx-auto text-destructive" />
          <div>
            <h2 className="text-lg font-semibold text-destructive">Error loading grocery list</h2>
            <p className="text-muted-foreground">
              {error instanceof Error ? error.message : 'Something went wrong'}
            </p>
          </div>
          <Button onClick={() => refetch()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const boughtItems = groceryItems?.filter(item => item.bought) || [];
  const unboughtItems = groceryItems?.filter(item => !item.bought) || [];

  return (
    <div className="container max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">My Grocery List</h1>
        </div>
        <p className="text-muted-foreground">
          {groceryItems?.length === 0 
            ? "Your grocery list is empty. Add some items to get started!" 
            : `${unboughtItems.length} item${unboughtItems.length !== 1 ? 's' : ''} to buy, ${boughtItems.length} completed`
          }
        </p>
      </div>

      {/* Add new item form */}
      <GroceryForm />

      {/* Grocery items */}
      {groceryItems?.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No items in your list yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Active items */}
          {unboughtItems.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">To Buy</h2>
              <div className="space-y-2">
                {unboughtItems.map(item => (
                  <GroceryItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* Completed items */}
          {boughtItems.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-muted-foreground">Completed</h2>
              <div className="space-y-2">
                {boughtItems.map(item => (
                  <GroceryItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 