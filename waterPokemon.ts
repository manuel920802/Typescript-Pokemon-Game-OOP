import { Pokemon } from "./pokemon";
import { Move } from "./move";

export class WaterPokemon extends Pokemon {
  constructor(name: string, maxHp: number, attackStat: number, moves: Move[]) {
    super(name, maxHp, attackStat, "Water", moves);
  }

  // Fulfilling the abstract contract from Pokemon
  protected override getDefenseMultiplier(incomingMoveType: string): number {
    if (incomingMoveType === "Fire") return 0.5;
    if (incomingMoveType === "Grass") return 2;
    return 1;
  }

  // Unique passive ability: Deals 5 bonus water splash damage when HP is below half
  override useMove(moveIndex: number, target: Pokemon): void {
    super.useMove(moveIndex, target);

    if (!target.isFainted() && this.currentHp < this.maxHp / 2) {
      console.log(
        `${this.name}'s Torrent activated! Deals 5 bonus splash damage!`,
      );
      target.takeDamage(5);
    }
  }
}
