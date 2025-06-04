import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { UnitSelect } from './UnitSelect';
import { useCreateGroceryItem } from '../hooks/useGrocery';
import { GroceryUnit, DEFAULT_UNIT } from '../constants/units';

export const GroceryForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState<GroceryUnit>(DEFAULT_UNIT);
  
  const createGroceryItem = useCreateGroceryItem();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numericAmount = parseFloat(amount);
    
    if (title.trim() && amount.trim() && !isNaN(numericAmount) && numericAmount > 0) {
      createGroceryItem.mutate({
        title: title.trim(),
        amount: numericAmount,
        unit: unit,
        bought: false,
      });
      
      setTitle('');
      setAmount('');
      setUnit(DEFAULT_UNIT);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Add New Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input
              type="text"
              placeholder="Item name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="md:col-span-1"
            />
            <Input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="0.1"
              step="0.1"
              className="md:col-span-1"
            />
            <UnitSelect
              value={unit}
              onValueChange={setUnit}
              placeholder="Select unit"
              className="md:col-span-1"
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