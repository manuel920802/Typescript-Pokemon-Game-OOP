import { Pokemon } from "./pokemon";
import { Move } from "./move";

export class FirePokemon extends Pokemon {
  constructor(name: string, maxHp: number, attackStat: number, moves: Move[]) {
    //'super()' calls the parent pokemon constructor and hardcodes the type to "Fire"
    super(name, maxHp, attackStat, "Fire", moves);
  }

  //Method overriding (Polymorphism): Fire resists Grass, weak to water
  protected override getDefenseMultiplier(incomingMoveType: string): number {
    if (incomingMoveType === "Grass") return 0.5;
    if (incomingMoveType === "Water") return 2;
    return 1;
  }

  //Overriding useMove to add a Fire-type passive ability (Blaze)
  override useMove(moveIndex: number, target: Pokemon): void {
    //First: execute the standard parent attack logic
    super.useMove(moveIndex, target);

    //Passive ability: if target survived, 25% chance to inflict burn damage
    if (!target.isFainted() && Math.random() < 0.25) {
      console.log(
        `${target.name} was burned by ${this.name}'s flames! (-4 HP)`,
      );
      target.takeDamage(4);
    }
  }
}
