import { Pokemon } from "./pokemon";

export interface HealingItem {
  name: string;
  healAmount: number;
  use(target: Pokemon): void;
}
