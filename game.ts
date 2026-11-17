// --- Let's set up a quick test match for your daily practice ---
import { Battle } from "./battle.js";
import { FirePokemon } from "./firePokemon.js";
import { GrassPokemon } from "./grassPokemon.js";
import { WaterPokemon } from "./waterPokemon.js";
import { Move } from "./move.js";
import { Trainer } from "./trainer.js";

//1.Create moves
const tackle = new Move("Tackle", 10, "Normal");
const ember = new Move("Ember", 20, "Fire");
const vineWhip = new Move("Vine Whip", 20, "Grass");
const waterGun = new Move("Water Gun", 20, "Water");

//2.Create trainers
const ash = new Trainer("Ash");
const gary = new Trainer("Gary");
const misty = new Trainer("Misty");

//3.Instantiate specialized subclasses! (Notice we no longer pass 'fire' or 'grass' strings)
ash.catchPokemon(new FirePokemon("Charmander", 65, 12, [tackle, ember]));
gary.catchPokemon(new GrassPokemon("Bulbasaur", 75, 10, [tackle, vineWhip]));
misty.catchPokemon(new WaterPokemon("Squirtle", 65, 11, [tackle, waterGun]));

//4.Verify teams in console
ash.showTeam();
misty.showTeam();

//5.Instantiate and run the Battle Engine
const match = new Battle(ash, misty);
match.start();
