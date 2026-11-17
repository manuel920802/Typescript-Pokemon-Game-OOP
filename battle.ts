import { Trainer } from "./trainer";
import { Pokemon } from "./pokemon";

export class Battle {
  private turnCount: number = 1;

  constructor(
    private trainer1: Trainer,
    private trainer2: Trainer,
  ) {}

  start(): void {
    const p1 = this.trainer1.getPokemon(0);
    const p2 = this.trainer2.getPokemon(0);

    //Guard clause: Verify both trainers have a valid pokemon to fight
    if (!p1 || !p2) {
      console.log("Battle cannot start! one or both trainers have no pokemon.");
      return;
    }

    console.log(`\n ==========================================`);
    console.log(
      `BATTLE START: ${this.trainer1.name} vs ${this.trainer2.name}!`,
    );
    console.log(`${this.trainer1.name} sends out ${p1.name}!`);
    console.log(`${this.trainer2.name} sends out ${p2.name}!`);
    console.log(`\n ==========================================`);

    //The automated loop: Keeps running as long as BOTH pokemon are alive
    while (!p1.isFainted() && !p2.isFainted()) {
      console.log(`--- Turn ${this.turnCount} ---`);

      //Trainer's 1 Pokemon attacks first
      this.executeRandomMove(p1, p2);

      //Check immediately if trainer's 2 Pokemon fainted before it gets to counter-attack
      if (p2.isFainted()) {
        console.log(`${p2.name} fainted!`);
        break; //Exit the while loop immediately
      }

      //Trainer's 2 Pokemon counter-attacks
      this.executeRandomMove(p2, p1);

      if (p1.isFainted()) {
        console.log(`${p1.name} fainted!`);
        break; //Exit the while loop immediately
      }

      this.turnCount++;
    }
    this.announceWinner(p1, p2);
  }

  //Private helper method: Keeps the main start() loop clean and readable
  private executeRandomMove(attacker: Pokemon, defender: Pokemon): void {
    const randomMoveIndex = Math.floor(Math.random() * attacker.moves.length);
    attacker.useMove(randomMoveIndex, defender);
  }

  private announceWinner(p1: Pokemon, p2: Pokemon): void {
    console.log(`\n ==========================================`);
    if (p1.isFainted()) {
      console.log(`${this.trainer2.name} wins the battle with ${p2.name}!`);
    } else {
      console.log(`${this.trainer1.name} wins the battle with ${p1.name}!`);
    }
    console.log(`\n ==========================================`);
  }
}
