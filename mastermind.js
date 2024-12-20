//** Étape 1:

let colorsToGuess = ["red", "black"];
const maxTry = 12;
let nbOfTry = 0;
const acceptedColors = ["red", "pink", "green", "black"];

//fonction pour s'assurer que les 4 couleurs sont respectées ou non:
function handleInput(color1, color2) {
    let color1IsValide = false
    let color2IsValide = false
  for (let i = 0; i < acceptedColors.length; i++) {
    if (color1 === acceptedColors[i]) {
      color1IsValide = true;
    }
    if (color2 === acceptedColors[i]) {
      color2IsValide = true;
    }
  }
  return color1IsValide && color2IsValide;
}
console.log(handleInput("red", "pink"));
