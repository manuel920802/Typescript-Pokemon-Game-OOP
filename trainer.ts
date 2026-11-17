import { Pokemon } from "./pokemon";

export class Trainer {
  //Encapsulation: The team array is private so external code cannot accidentally wipe it out
  private team: Pokemon[] = [];

  constructor(public readonly name: string) {}

  //Method to add pokemon to the trainer's party (Max 6)
  catchPokemon(newPokemon: Pokemon): void {
    if (this.team.length >= 6) {
      console.log(
        `${this.name}'s party is full! cannot catch ${newPokemon.name}. `,
      );
      return;
    }

    this.team.push(newPokemon);
    console.log(
      `${this.name}'s caught ${newPokemon.name}! (Team size: ${this.team.length}/6)`,
    );
  }

  //Method to retrieve a specific Pokemon to send into battle
  getPokemon(slotIndex: number): Pokemon | undefined {
    const chosenPokemon = this.team[slotIndex];

    if (!chosenPokemon) {
      console.log(`${this.name} has no Pokemon in slot ${slotIndex}!`);
      return undefined;
    }
    return chosenPokemon;
  }

  //Helper method to display the trainer's current roster
  showTeam(): void {
    console.log(`\n --- ${this.name}'s Team ---`);
    this.team.forEach((pokemon, index) => {
      console.log(
        `[Slot ${index}] ${pokemon.name} (${pokemon.type}) - ${pokemon.getCurrentHp()} HP`,
      );
    });
    console.log(`--------------------\n`);
  }
}
