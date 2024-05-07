"use strict"

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
//Cashe DOM with all the global Varibales need for the game Logic
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/**
 * Updates the game location based on the provided location object.
 * @param {Object} location - The location object containing information about the game location.
 * @param {string} location.button text - An array of strings representing the text for each button.
 * @param {Function[]} location.button functions - An array of functions representing the click event handlers for each button.
 * @param {string} location.text - The text to be displayed in the game location.
 */
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

/**
 * Executes the "goTown" function.
 * This function updates the current location to the first location in the "locations" array.
 */
function goTown() {
  update(locations[0]);
}

function goTown() {
  update(locations[0]);
}

/**
 * Executes the goStore function.
 * This function updates the location to the second location in the locations array.
 */
function goStore() {
  update(locations[1]);
}

/**
 * Executes the goCave function.
 * 
 * This function updates the current location to the cave location.
 */
function goCave() {
  update(locations[2]);
}

/**
 * Buys health using gold.
 * If the player has enough gold, their gold is reduced by 10 and their health is increased by 10.
 * Updates the gold and health text elements on the page.
 * If the player does not have enough gold, displays an error message.
 */
function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

/**
 * Buys a weapon if the player has enough gold and the current weapon is not the most powerful.
 */
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

/**
 * Function to initiate a fight with a slime.
 */
function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

/**
 * Executes the fight action.
 * Updates the current location.
 * Retrieves the health of the monster being fought.
 * Displays the monster's stats.
 * Updates the monster's name and health on the UI.
 */
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

/**
 * Executes an attack between the player and a monster.
 */
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

/**
 * Calculates the attack value of a monster based on its level.
 * @param {number} level - The level of the monster.
 * @returns {number} The attack value of the monster.
 */
function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

/**
 * Determines if the monster is hit based on a random chance or low health.
 * @returns {boolean} True if the monster is hit, false otherwise.
 */
function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

/**
 * Defeats a monster and updates the player's gold and experience points.
 */
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

/**
 * Restarts the game by resetting the player's attributes and initiating a new game session.
 */
function restart() {
  xp = 0; // Reset the player's experience points to 0.
  health = 100; // Reset the player's health to 100.
  gold = 50; // Reset the player's gold to 50.
  currentWeapon = 0; // Reset the player's current weapon to the default weapon.
  inventory = ["stick"]; // Reset the player's inventory to only contain a stick.
  goldText.innerText = gold; // Update the gold text element to display the new gold value.
  healthText.innerText = health; // Update the health text element to display the new health value.
  xpText.innerText = xp; // Update the experience points text element to display the new experience points value.
  goTown(); // Initiate the goTown() function to start the game in the town area.
}

/**
 * Executes an Easter egg function.
 * 
 * This function updates the location at index 7 in the 'locations' array.
 * 
 * @returns {void}
 */
function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

/**
 * Picks random numbers and compares them to the user's guess.
 * If the guess matches any of the random numbers, the user wins gold.
 * If the guess does not match any of the random numbers, the user loses health.
 * If the user's health reaches 0 or below, the user loses the game.
 * @param {number} guess - The user's guess.
 */
function pick(guess) {
  const numbers = [];
  
  // Generate 10 random numbers between 0 and 10 (inclusive)
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  
  // Display the user's guess and the random numbers
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  
  // Check if the guess matches any of the random numbers
  if (numbers.includes(guess)) {
    // If the guess is correct, award 20 gold to the user
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    // If the guess is incorrect, deduct 10 health from the user
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    
    // Check if the user's health reaches 0 or below
    if (health <= 0) {
      // If the user's health is 0 or below, call the lose() function
      lose();
    }
  }
}
