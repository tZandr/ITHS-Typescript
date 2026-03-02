import type { Product } from "./types";

const items: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 12999,
    inStock: true,
  },
  {
    id: 2,
    name: "Switch",
    price: 3499,
    inStock: true,
    description: "Hybrid video game console from Nintendo.",
  },
];

console.log(items)
