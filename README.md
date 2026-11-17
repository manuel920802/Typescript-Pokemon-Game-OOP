# ⚔️ TypeScript OOP Turn-Based Battle Engine

A console-based, turn-based RPG battle simulator built from scratch in **TypeScript** to master **Object-Oriented Programming (OOP)** principles and software architecture.

> **Purpose:** Designed as a practical engineering bridge between manual/API quality assurance and scalable **Test Automation Frameworks** (such as **Playwright** with the **Page Object Model**).

---

## 🧠 OOP Concepts & Architecture

Rather than relying on procedural scripts or monolithic conditional blocks, this engine is structured around clean design principles:

* **Abstraction (`abstract` classes & methods):** The base `Pokemon` class serves as a strict blueprint that cannot be instantiated directly. It enforces an abstract `getDefenseMultiplier()` contract that all elemental subclasses must implement.
* **Inheritance (`extends` & `super`):** Elemental subclasses (`FirePokemon`, `GrassPokemon`, `WaterPokemon`) inherit shared state and combat mechanics from the base `Pokemon` class, eliminating code duplication.
* **Polymorphism (Method Overriding):** Each elemental subclass overrides base combat behaviors to calculate type advantages/resistances and trigger unique passive abilities (e.g., *Blaze* burn damage, *Photosynthesis* healing, and *Torrent* splash damage).
* **Encapsulation (`private` & `protected` modifiers):** Internal state—such as `currentHp`, `maxHp`, and a trainer's `team` roster—is protected from direct external mutation, exposing only safe, validated public methods (`takeDamage()`, `catchPokemon()`).
* **Composition ("Has-a" relationships):** Complex entities are assembled from smaller, single-responsibility objects (`Trainer` manages a collection of `Pokemon`; `Pokemon` executes a collection of `Move` objects; `Battle` orchestrates two `Trainer` instances).

---

## 🎭 How This Translates to QA Automation (Playwright)

Every architectural decision in this project maps directly to enterprise test automation design:

| RPG Engine Pattern | Playwright Automation Equivalent (POM) |
| :--- | :--- |
| `abstract class Pokemon` | `abstract class BasePage` enforcing shared navigation and page-load contracts |
| `FirePokemon extends Pokemon` | `LoginPage extends BasePage` inheriting core helpers while overriding page-specific actions |
| `Trainer` holding `Pokemon[]` | Test suites or parent pages composing modular UI components (`Navbar`, `CartModal`) |
| `Battle.start()` polling loop | Automated end-to-end test execution with state-driven assertions and polling |
| Guard clauses & Union types | Defensive locator checks and strict TypeScript typing to prevent flaky test crashes |

---

## 📂 Project Structure

```text
├── move.ts           # Defines Move attributes (name, power, elemental type)
├── pokemon.ts        # Abstract base class handling HP encapsulation, damage math, & critical hits
├── firePokemon.ts    # Fire subclass with type multipliers & burn passive ability
├── grassPokemon.ts   # Grass subclass with type multipliers & healing passive ability
├── waterPokemon.ts   # Water subclass with type multipliers & low-HP splash passive
├── trainer.ts        # Manages a bounded team roster (max 6) using Composition
├── battle.ts         # Automated turn-by-turn battle engine & winner assertion
└── game.ts           # Entry point / test runner configuring entities and starting matches
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org) (v18 or higher recommended)
* npm

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd YOUR-REPO-NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the battle simulation:**
   ```bash
   npx tsx game.ts
   ```

---

## ⚖️ Disclaimer

This is a non-commercial, educational project created strictly for practicing TypeScript and Object-Oriented Programming concepts. *Pokémon* and related character/move names are registered trademarks of Nintendo, Creatures Inc., and GAME FREAK.
