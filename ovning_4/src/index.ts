import type { Product } from "./types";

// Pick
type idName = Pick<Product, "id" | "name">;

// Omit
type noId = Omit<Product, "id">

// Partial(Gör alla fält optional)
type update = Partial<Product>

// Readonly
type readonly = Readonly<Product>


