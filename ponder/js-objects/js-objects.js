// Character object with properties + methods (required)
const character = {
  name: "Swamp Beast Diplomat",
  class: "Diplomat",
  level: 1,
  health: 100,
  image: {
    src: "https://static.wikia.nocookie.net/delicious-in-dungeon/images/0/0f/Swamp_Beast_Diplomat.png",
    alt: "A swamp beast diplomat character portrait."
  },

  attacked() {
    if (this.health <= 0) return "The character is already dead.";

    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      return `${this.name} has died.`;
    }

    return `${this.name} was attacked! Health is now ${this.health}.`;
  },

  levelUp() {
    this.level += 1;
    return `${this.name} leveled up! Level is now ${this.level}.`;
  }
};

// ---- DOM wiring ----
const elName = document.querySelector("#charName");
const elClass = document.querySelector("#charClass");
const elLevel = document.querySelector("#charLevel");
const elHealth = document.querySelector("#charHealth");
const elImage = document.querySelector("#charImage");
const elMessage = document.querySelector("#message");

const attackBtn = document.querySelector("#attackBtn");
const levelUpBtn = document.querySelector("#levelUpBtn");

function render(message = "") {
  elName.textContent = character.name;
  elClass.textContent = character.class;
  elLevel.textContent = String(character.level);
  elHealth.textContent = String(character.health);

  elImage.src = character.image.src;
  elImage.alt = character.image.alt;

  elMessage.textContent = message;

  // Optional: disable attack if dead
  attackBtn.disabled = character.health <= 0;
}

attackBtn.addEventListener("click", () => {
  const msg = character.attacked();
  render(msg);
});

levelUpBtn.addEventListener("click", () => {
  const msg = character.levelUp();
  render(msg);
});

// initial render
render("Ready.");