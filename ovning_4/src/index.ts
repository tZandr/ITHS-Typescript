import type { Product } from "./types";

// Pick
type idName = Pick<Product, "id" | "name">;

// Omit
type noId = Omit<Product, "id">

