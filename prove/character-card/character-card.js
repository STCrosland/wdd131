const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  isDead: false,

  attacked() {
    if (this.isDead) return;

    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      this.isDead = true;
      alert("Character Died");
    }
  },

  levelUp() {
    // In the video, level up still works even if health is low.
    // If your teacher wants it to stop after death, change this to:
    // if (this.isDead) return;
    this.level += 1;
  }
};

// DOM refs
const charNameEl = document.querySelector("#charName");
const charClassEl = document.querySelector("#charClass");
const charLevelEl = document.querySelector("#charLevel");
const charHealthEl = document.querySelector("#charHealth");

const btnAttacked = document.querySelector("#btnAttacked");
const btnLevelUp = document.querySelector("#btnLevelUp");

function renderCharacter() {
  charNameEl.textContent = character.name;
  charClassEl.textContent = character.class;
  charLevelEl.textContent = character.level;
  charHealthEl.textContent = character.health;
}

btnAttacked.addEventListener("click", () => {
  character.attacked();
  renderCharacter();
});

btnLevelUp.addEventListener("click", () => {
  character.levelUp();
  renderCharacter();
});

renderCharacter();