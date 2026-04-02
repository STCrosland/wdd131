// === Creature Data ===
const creatures = [
  {
    name: "Dragon",
    origin: "Norse",
    description: "Norse dragons are massive, serpent-like creatures known for their immense strength, scales, and destructive power.",
    lore: "Fafnir, once a dwarf, became a dragon consumed by greed until slain by Sigurd.",
    abilities: "Fire breath, immense strength, treasure guarding",
    image: "images/norse/norse-dragon.jpg"
  },
  {
    name: "Kraken",
    origin: "Norse",
    description: "A gigantic sea monster resembling a massive squid or octopus.",
    lore: "The Kraken rose from the deep, creating whirlpools and sinking ships.",
    abilities: "Tentacles, sea manipulation, ship destruction",
    image: "images/norse/norse-kraken.jpg"
  },
  {
    name: "Wraith",
    origin: "Norse",
    description: "Ghostly, shadow-like spirits associated with death.",
    lore: "Wraiths appeared as omens before death or disaster.",
    abilities: "Intangibility, fear aura, death omen",
    image: "images/norse/wraith.jpg"
  },
  {
    name: "Valkyrie",
    origin: "Norse",
    description: "Valkyries are powerful female figures who choose which warriors live and die in battle.",
    lore: "In Norse mythology, Valkyries served Odin and carried brave fallen warriors to Valhalla.",
    abilities: "Flight, battle skill, guiding souls",
    image: "images/norse/valkyrie.jpg"
  },
  {
    name: "Dwarf",
    origin: "Norse",
    description: "Norse dwarfs are skilled underground beings known for their craftsmanship and magical creations.",
    lore: "Dwarfs forged many legendary items in Norse myth, including Thor’s hammer, Mjolnir.",
    abilities: "Smithing, magic crafting, endurance",
    image: "images/norse/dwarf.jpg"
  },
  {
    name: "Elf",
    origin: "Norse",
    description: "Elves are magical beings associated with beauty, nature, and supernatural power.",
    lore: "Norse mythology describes elves as mysterious beings connected to light, fertility, and hidden realms.",
    abilities: "Magic, agility, nature connection",
    image: "images/norse/elf.jpg"
  },
  {
    name: "Griffin",
    origin: "Greek",
    description: "A lion-eagle hybrid symbolizing strength and vigilance.",
    lore: "Griffins guarded treasure and sacred places.",
    abilities: "Flight, sharp vision, powerful talons",
    image: "images/greek/griffin.jpg"
  },
  {
    name: "Minotaur",
    origin: "Greek",
    description: "A monstrous being with the body of a man and the head of a bull.",
    lore: "The Minotaur lived in the Labyrinth until slain by Theseus.",
    abilities: "Brute strength, endurance, intimidation",
    image: "images/greek/minotaur.jpg"
  },
  {
    name: "Phoenix",
    origin: "Greek",
    description: "A radiant bird reborn from its own ashes.",
    lore: "The phoenix symbolizes immortality and renewal.",
    abilities: "Rebirth, fire manipulation, healing",
    image: "images/greek/phoenix.jpg"
  },
  {
    name: "Titan",
    origin: "Greek",
    description: "Titans are enormous primordial beings of incredible power who ruled before the Olympian gods.",
    lore: "The Titans fought against Zeus and the Olympians in a great war known as the Titanomachy.",
    abilities: "Immense power, control over nature, endurance",
    image: "images/greek/titan.jpg"
  },
  {
    name: "Cyclops",
    origin: "Greek",
    description: "A giant one-eyed being known for strength and fierce temper.",
    lore: "Cyclopes were powerful creatures in Greek mythology, sometimes working as master smiths for the gods.",
    abilities: "Great strength, crafting, intimidation",
    image: "images/greek/cyclops.jpg"
  },
  {
    name: "Siren",
    origin: "Greek",
    description: "Sirens are dangerous creatures known for their enchanting voices and deadly allure.",
    lore: "Greek sailors feared sirens, whose songs lured ships onto rocks and caused destruction.",
    abilities: "Enchanting song, persuasion, deception",
    image: "images/greek/siren.jpg"
  },
  {
    name: "Wendigo",
    origin: "Native American",
    description: "A gaunt creature associated with cold, hunger, and greed.",
    lore: "Humans became Wendigos through cannibalism or extreme greed.",
    abilities: "Speed, mimicry, insatiable hunger",
    image: "images/native-american/wendigo.jpg"
  },
  {
    name: "Skinwalker",
    origin: "Native American",
    description: "A shapeshifting being capable of becoming animals.",
    lore: "Skinwalkers are witches who gained power through dark rituals.",
    abilities: "Shapeshifting, stealth, dark magic",
    image: "images/native-american/skinwalker.jpg"
  },
  {
    name: "Sasquatch",
    origin: "Native American",
    description: "A large, hairy, human-like forest creature.",
    lore: "Sasquatch is seen as a guardian of nature.",
    abilities: "Stealth, strength, forest knowledge",
    image: "images/native-american/sasquatch.jpg"
  },
  {
    name: "Thunderbird",
    origin: "Native American",
    description: "A massive sacred bird associated with storms, thunder, and divine power.",
    lore: "Many Native traditions describe the Thunderbird as a protector spirit whose wings create thunder.",
    abilities: "Storm control, flight, divine power",
    image: "images/native-american/thunderbird.jpg"
  },
  {
    name: "Pukwudgie",
    origin: "Native American",
    description: "A small, tricky woodland creature known for mischief and supernatural powers.",
    lore: "Pukwudgies appear in northeastern Native folklore as beings that can either help or harm humans.",
    abilities: "Stealth, magic, trickery",
    image: "images/native-american/pukwudgie.jpg"
  },
  {
    name: "Kushtaka",
    origin: "Native American",
    description: "A shape-changing creature often connected with otters and the wilderness.",
    lore: "In Tlingit tradition, the Kushtaka could lure people into danger by imitating human cries.",
    abilities: "Shapeshifting, mimicry, deception",
    image: "images/native-american/kushtaka.jpg"
  }
];


// === Helper: Create Creature Card ===
function createCard(creature) {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${creature.image}" alt="${creature.name}">
    <h3>${creature.name}</h3>
    <p>Origin: ${creature.origin}</p>
    <p>${creature.description}</p>
  `;

  return card;
}


// === Shared Detail Panel Logic ===
function showDetail(creature, detail) {
  detail.panel.classList.remove("hidden");
  detail.name.textContent = creature.name;
  detail.origin.textContent = "Origin: " + creature.origin;
  detail.img.src = creature.image;
  detail.img.alt = creature.name;
  detail.desc.textContent = creature.description;
  detail.lore.textContent = "Lore: " + creature.lore;
  detail.abilities.textContent = "Abilities: " + creature.abilities;
}


// === CREATURES PAGE ===
function loadCreaturesPage() {
  const grid = document.getElementById("creatures-grid");
  const search = document.getElementById("search-input");

  const detail = {
    panel: document.getElementById("creature-detail"),
    name: document.getElementById("detail-name"),
    origin: document.getElementById("detail-origin"),
    img: document.getElementById("detail-image"),
    desc: document.getElementById("detail-description"),
    lore: document.getElementById("detail-lore"),
    abilities: document.getElementById("detail-abilities")
  };

  const closeBtn = document.getElementById("close-detail");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      detail.panel.classList.add("hidden");
    });
  }

  function render() {
    grid.innerHTML = "";
    const term = search.value.toLowerCase();

    creatures
      .filter(c =>
        c.name.toLowerCase().includes(term) ||
        c.description.toLowerCase().includes(term) ||
        c.origin.toLowerCase().includes(term)
      )
      .forEach(creature => {
        const card = createCard(creature);
        card.addEventListener("click", () => showDetail(creature, detail));
        grid.appendChild(card);
      });
  }

  search.addEventListener("input", render);
  render();
}


// === ORIGINS PAGE ===
function loadOriginsPage() {
  const select = document.getElementById("origin-select");
  const grid = document.getElementById("origins-grid");

  const detail = {
    panel: document.getElementById("origin-detail"),
    name: document.getElementById("origin-detail-name"),
    origin: document.getElementById("origin-detail-origin"),
    img: document.getElementById("origin-detail-image"),
    desc: document.getElementById("origin-detail-description"),
    lore: document.getElementById("origin-detail-lore"),
    abilities: document.getElementById("origin-detail-abilities")
  };

  const closeBtn = document.getElementById("close-origin-detail");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      detail.panel.classList.add("hidden");
    });
  }

  select.addEventListener("change", () => {
    grid.innerHTML = "";
    const origin = select.value;

    creatures
      .filter(c => c.origin === origin)
      .forEach(creature => {
        const card = createCard(creature);
        card.addEventListener("click", () => showDetail(creature, detail));
        grid.appendChild(card);
      });
  });
}


// === HOME PAGE ===
function loadHomePage() {
  const featured = ["Dragon", "Phoenix", "Wendigo"];
  const container = document.getElementById("featured-creatures");

  const detail = {
    panel: document.getElementById("home-detail"),
    name: document.getElementById("home-detail-name"),
    origin: document.getElementById("home-detail-origin"),
    img: document.getElementById("home-detail-image"),
    desc: document.getElementById("home-detail-description"),
    lore: document.getElementById("home-detail-lore"),
    abilities: document.getElementById("home-detail-abilities")
  };

  const closeBtn = document.getElementById("close-home-detail");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      detail.panel.classList.add("hidden");
    });
  }

  creatures
    .filter(c => featured.includes(c.name))
    .forEach(creature => {
      const card = createCard(creature);
      card.addEventListener("click", () => showDetail(creature, detail));
      container.appendChild(card);
    });
}


// === PAGE DETECTION ===
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("creatures-grid")) {
    loadCreaturesPage();
  }

  if (document.getElementById("origin-select")) {
    loadOriginsPage();
  }

  if (document.getElementById("featured-creatures")) {
    loadHomePage();
  }
});