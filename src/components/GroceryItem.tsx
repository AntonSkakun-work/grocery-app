import { useState } from 'react';
import { Pencil, Trash2, Save, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent } from './ui/card';
import { useUpdateGroceryItem, useDeleteGroceryItem } from '../hooks/useGrocery';
import type { GroceryItem as GroceryItemType } from '../types/grocery';

interface GroceryItemProps {
  item: GroceryItemType;
}

export const GroceryItem = ({ item }: GroceryItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editAmount, setEditAmount] = useState(item.amount);

  const updateGroceryItem = useUpdateGroceryItem();
  const deleteGroceryItem = useDeleteGroceryItem();

  const handleSave = () => {
    updateGroceryItem.mutate({
      id: item.id,
      title: editTitle,
      amount: editAmount,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(item.title);
    setEditAmount(item.amount);
    setIsEditing(false);
  };

  const handleToggleBought = () => {
    updateGroceryItem.mutate({
      id: item.id,
      bought: !item.bought,
    });
  };

  const handleDelete = () => {
    deleteGroceryItem.mutate(item.id);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={item.bought}
            onCheckedChange={handleToggleBought}
            className="mt-1"
          />
          
          <div className="flex-1 min-w-0">
            {isEditing ? (
              <div className="space-y-2">
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="Item name"
                  className="w-full"
                />
                <Input
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full"
                />
              </div>
            ) : (
              <div>
                <h3 
                  className={`font-medium text-sm md:text-base ${
                    item.bought ? 'line-through text-muted-foreground' : ''
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`text-sm text-muted-foreground ${
                  item.bought ? 'line-through' : ''
                }`}>
                  {item.amount}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-1">
            {isEditing ? (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleSave}
                  disabled={updateGroceryItem.isPending}
                  className="h-8 w-8"
                >
                  <Save className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCancel}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsEditing(true)}
                  className="h-8 w-8"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleDelete}
                  disabled={deleteGroceryItem.isPending}
                  className="h-8 w-8 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 