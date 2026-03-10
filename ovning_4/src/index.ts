import type { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "Gym Bag",
    price: 599,
    description: "For carrying things?",
    inStock: true,
    category: ["Accessories"],
  },
  {
    id: 2,
    name: "Whey 100%",
    price: 349,
    description: "Whey Protein Concentrate",
    inStock: true,
    category: ["Nutrition", "Supplement"],
  },
];

// console.log(products)

// Pick
type idName = Pick<Product, "id" | "name">;

const productList: idName[] = [
  { id: 1, name: "Gym Bag" },
  { id: 2, name: "Whey 100%" },
];

console.log("Pick:", productList);

// Omit... seems useless? lol
type noId = Omit<Product, "id">;

const omitted: noId[] = [
  {
    name: "Gym Bag",
    price: 599,
    description: "For carrying things?",
    inStock: true,
    category: ["Accessories"],
  },
  {
    name: "Whey 100%",
    price: 349,
    description: "Whey Protein Concentrate",
    inStock: true,
    category: ["Nutrition", "Supplement"],
  },
];

console.log("Omit:", omitted);

// Partial(Gör alla fält optional)
type update = Partial<Product>;

const updated: update[] = [
  {
    id: 1,
    name: "Optional Quest Item",
    description: "Does nothing.",
  },
];

console.log("Partial: ", updated);

// Readonly
type readonly = Readonly<Product>;

const readList: readonly[] = [ // Refuses
  {
    id: 1,
  }
]
