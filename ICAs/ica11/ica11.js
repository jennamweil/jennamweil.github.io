// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters = ["Bob the Builder", "Thomas the Train", "Dora the Explorer"];
const places = ["the moon", "Starbucks", "a haunted house"];
const events = ["froze solid", "started a flash mob", "got stuck in a vending machine",];


// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  const storyText = `The weather hit 50 Fahrenheit outside, so ${randomCharacter} wanted to go for a swim. Instead of the swimming pool, they found themselves at ${randomPlace}. Rather than questioning it, they ${randomEvent}. Peppa Pig laughed in amusement, she happened to be walking by — ${randomCharacter} weighed 600 pounds, and couldn't get home.`;

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
    let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
  const weight = `${Math.round(600 / 14)} stone`;
  const temperature = `${Math.round((50 - 32) * (5 / 9))} Celsius`;
  newStory = newStory.replace("600 pounds", weight);
  newStory = newStory.replace("50 Fahrenheit", temperature);
}

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}