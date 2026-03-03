export type Category = "electronics" | "food" | "clothing";
export type Price = number | string;

export interface Product {
  id: number;
  name: string;
  price: Price;
  category: Category;
  inStock: boolean;
  description?: string;
  tags: string[];
}
