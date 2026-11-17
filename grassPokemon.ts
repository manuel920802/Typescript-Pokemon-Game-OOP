import { Pokemon } from "./pokemon";
import { Move } from "./move";

export class GrassPokemon extends Pokemon {
  constructor(name: string, maxHp: number, attackStat: number, moves: Move[]) {
    super(name, maxHp, attackStat, "Grass", moves);
  }

  // Method Overriding (Polymorphism): Grass is weak to Fire, resists Water
  protected override getDefenseMultiplier(incomingMoveType: string): number {
    if (incomingMoveType === "Fire") return 2;
    if (incomingMoveType === "Water") return 0.5;
    return 1;
  }

  // Overriding useMove to add a Grass-type passive ability (Photosynthesis)
  override useMove(moveIndex: number, target: Pokemon): void {
    super.useMove(moveIndex, target);

    // Passive ability: Heal 3 HP after attacking if still alive
    if (!this.isFainted() && this.currentHp < this.maxHp) {
      this.currentHp = Math.min(this.maxHp, this.currentHp + 3);
      console.log(
        `${this.name} absorbed sunlight and healed 3 HP! (${this.currentHp}/${this.maxHp} HP)`,
      );
    }
  }
}
