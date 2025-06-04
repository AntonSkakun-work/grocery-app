import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useCreateGroceryItem } from '../hooks/useGrocery';

export const GroceryForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  
  const createGroceryItem = useCreateGroceryItem();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() && amount.trim()) {
      createGroceryItem.mutate({
        title: title.trim(),
        amount: amount.trim(),
        bought: false,
      });
      
      setTitle('');
      setAmount('');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Add New Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="Item name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Amount (e.g., 2 kg, 1 gallon)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <Button 
            type="submit" 
            disabled={createGroceryItem.isPending}
            className="w-full md:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}; 