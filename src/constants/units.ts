export enum GroceryUnit {
  // Weight units
  KG = 'kg',
  G = 'g',
  LB = 'lb',
  OZ = 'oz',
  
  // Volume units
  L = 'L',
  ML = 'ml',
  GALLON = 'gallon',
  CUP = 'cup',
  PINT = 'pint',
  QUART = 'quart',
  
  // Count units
  PIECES = 'pieces',
  ITEMS = 'items',
  PACK = 'pack',
  BOX = 'box',
  BAG = 'bag',
  BOTTLE = 'bottle',
  CAN = 'can',
  JAR = 'jar',
}

export const UNIT_LABELS: Record<GroceryUnit, string> = {
  [GroceryUnit.KG]: 'kg',
  [GroceryUnit.G]: 'g',
  [GroceryUnit.LB]: 'lb',
  [GroceryUnit.OZ]: 'oz',
  [GroceryUnit.L]: 'L',
  [GroceryUnit.ML]: 'ml',
  [GroceryUnit.GALLON]: 'gallon',
  [GroceryUnit.CUP]: 'cup',
  [GroceryUnit.PINT]: 'pint',
  [GroceryUnit.QUART]: 'quart',
  [GroceryUnit.PIECES]: 'pieces',
  [GroceryUnit.ITEMS]: 'items',
  [GroceryUnit.PACK]: 'pack',
  [GroceryUnit.BOX]: 'box',
  [GroceryUnit.BAG]: 'bag',
  [GroceryUnit.BOTTLE]: 'bottle',
  [GroceryUnit.CAN]: 'can',
  [GroceryUnit.JAR]: 'jar',
};

export const UNIT_GROUPS = {
  weight: [GroceryUnit.KG, GroceryUnit.G, GroceryUnit.LB, GroceryUnit.OZ],
  volume: [GroceryUnit.L, GroceryUnit.ML, GroceryUnit.GALLON, GroceryUnit.CUP, GroceryUnit.PINT, GroceryUnit.QUART],
  count: [GroceryUnit.PIECES, GroceryUnit.ITEMS, GroceryUnit.PACK, GroceryUnit.BOX, GroceryUnit.BAG, GroceryUnit.BOTTLE, GroceryUnit.CAN, GroceryUnit.JAR],
} as const;

export const DEFAULT_UNIT = GroceryUnit.PIECES; 