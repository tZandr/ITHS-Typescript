import type { Product } from "./types";

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 12999,
  category: "electronics",
  inStock: true,
  tags: ["Dell", "i7", "nvidia"],
};

const item: Product = {
  id: 1,
  name: "Laptop",
  price: "15999",
  category: "electronics",
  inStock: true,
  tags: ["Dell", "i9", "nvidia"],
};

const items: Product[] = [
  {
    id: 1,
    name: "Gaming PC",
    price: 12999,
    category: "electronics",
    inStock: true,
    description: "Desktop PC for victory royales",
    tags: ["Omen", "AMD"],
  },
  {
    id: 2,
    name: "Nintendo Switch 2",
    price: 4499,
    category: "electronics",
    inStock: false,
    tags: ["Nintendo", "Mario"],
  },
];

console.log(items);
