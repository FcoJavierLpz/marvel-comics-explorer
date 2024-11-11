import type { Comic } from "./comic";

export interface CartItem extends Comic {
  quantity: number;
}
