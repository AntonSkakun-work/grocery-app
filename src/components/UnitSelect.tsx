import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { GroceryUnit, UNIT_LABELS, UNIT_GROUPS } from '../constants/units';

interface UnitSelectProps {
  value: GroceryUnit;
  onValueChange: (value: GroceryUnit) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const UnitSelect = ({ 
  value, 
  onValueChange, 
  placeholder = "Select unit",
  className,
  disabled 
}: UnitSelectProps) => {
  return (
    <Select 
      value={value} 
      onValueChange={(value: string) => onValueChange(value as GroceryUnit)}
      disabled={disabled}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <div className="text-xs font-medium text-muted-foreground px-2 py-1">Weight</div>
        {UNIT_GROUPS.weight.map((unitOption) => (
          <SelectItem key={unitOption} value={unitOption}>
            {UNIT_LABELS[unitOption]}
          </SelectItem>
        ))}
        <div className="text-xs font-medium text-muted-foreground px-2 py-1 mt-2">Volume</div>
        {UNIT_GROUPS.volume.map((unitOption) => (
          <SelectItem key={unitOption} value={unitOption}>
            {UNIT_LABELS[unitOption]}
          </SelectItem>
        ))}
        <div className="text-xs font-medium text-muted-foreground px-2 py-1 mt-2">Count</div>
        {UNIT_GROUPS.count.map((unitOption) => (
          <SelectItem key={unitOption} value={unitOption}>
            {UNIT_LABELS[unitOption]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}; 