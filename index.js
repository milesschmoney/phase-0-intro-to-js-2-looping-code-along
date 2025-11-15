// Code your solutions in this file

// Sample loop (not required for tests)
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

// Sample wrapGifts function
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

// =======================================
// ✅ REQUIRED FUNCTION #1 — writeCards()
// =======================================

function writeCards(names, event) {
  const messages = []; // new array to hold messages

  for (let i = 0; i < names.length; i++) {
    messages.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }

  return messages; // return array
}

// =======================================
// ✅ REQUIRED FUNCTION #2 — countDown()
// =======================================

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// =======================================
// ✅ Export for tests
// =======================================

module.exports = {
  writeCards,
  countDown,
};
