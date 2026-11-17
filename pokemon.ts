//Import 'Move' class to be used in pokemon class
import { Move } from "./move";

//The Pokemon class manages stats and taking damage, export to be used in other classes
//'abstract' prevents anyone from calling 'new Pokemon(...)' directly
export abstract class Pokemon {
  //'Protected' allows subclasses to access currenthp while keeping it hidden from game.ts
  protected currentHp: number;

  constructor(
    public readonly name: string,
    protected maxHp: number,
    public readonly attackStat: number,
    public readonly type: string,
    public readonly moves: Move[],
  ) {
    this.currentHp = maxHp;
  }

  // Encapsulation: Access the private HP safely
  getCurrentHp(): number {
    return this.currentHp;
  }

  //Checks is the pokemon runs out of HP
  isFainted(): boolean {
    return this.currentHp <= 0;
  }

  // Method to handle damage logic
  takeDamage(amount: number): void {
    this.currentHp = Math.max(0, this.currentHp - amount);
    console.log(`${this.name} has ${this.currentHp}/${this.maxHp} HP left!`);
  }

  //Polymorphic hook: Subclasses will override this to define their own weaknesses/resistances
  //Abstract method: No implementation here! Subclasses MUST implement this.
  protected abstract getDefenseMultiplier(incomingMoveType: string): number;

  // OOP Action: This object attacks another object
  useMove(moveIndex: number, target: Pokemon): void {
    const chosenMove = this.moves[moveIndex];
    if (!chosenMove) {
      console.log(`Error: ${this.name} tried to use an invalid move slot!`);
      return;
    }

    console.log(`\n⚔️ ${this.name} uses ${chosenMove.name}!`);

    //1.Base damage calculation
    let baseDamage = chosenMove.power + Math.floor(this.attackStat / 2);

    //Polymorphism in action: We ask the target how resistant/weak it is to this move type!
    const damageMultiplier = target.getDefenseMultiplier(chosenMove.type);

    //2.Type advantage logic
    if (damageMultiplier > 1) {
      console.log("Its super effective!");
    } else if (damageMultiplier < 1) {
      console.log("Its not very effective...");
    }

    //Apply type multiplier to base damage
    let intermediateDamage = Math.floor(baseDamage * damageMultiplier);

    //3.Critical hit logic (15% chance)
    const isCritical = Math.random() < 0.15;
    if (isCritical) {
      intermediateDamage *= 1.5;
      console.log("A CRITICAL HIT!");
    }

    //4.Final damage calculation
    const finalDamage = Math.floor(intermediateDamage);
    target.takeDamage(finalDamage);
  }
}
