//** Étape 1:

let colorsToGuess = ["red", "black"];
const maxTry = 12;
let nbOfTry = 0;
const acceptedColors = ["red", "pink", "green", "black"];

//fonction pour s'assurer que les 4 couleurs sont respectées ou non:
function handleacceptedColors(color1, color2) {
  return acceptedColors.includes(color1) && acceptedColors.includes(color2);
}
// console.log(handleacceptedColors('blue','red'));// false
// console.log(handleacceptedColors('pink','black'))// true

//Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non:
function codeBreaker(color1, color2) {
    if (color1 === colorsToGuess[0] && color2 === colorsToGuess[1]){
        return true
    }
    return false
}
// console.log(codeBreaker("red", "pink")); // false
// console.log(codeBreaker("black", "blue")); // false
//console.log(codeBreaker('red','black')); //true
//console.log(codeBreaker('red','red')); //false


//Une fonction qui gère la partie (continuer tant que/fin si gagné)
function startGame(color1, color2) {
  if (nbOfTry < maxTry) {
    if (handleacceptedColors(color1, color2) === false) {
      return "veuillez choisir une des 4 couleurs proposées";
    } else if (codeBreaker(color1, color2) === false) {
      nbOfTry++;
      return `veuillez réessayer, tentative ${nbOfTry}`;
    }
    return "Bravo vous avez réussi à devener les 2 couleurs";
  }
  return "Vous avez atteint le max des tentatives, les coleurs à deviner sont (red,balck)";
}
//console.log(startGame('red','pink')); // faire 12 console.log pourque le nbOfTry s'incrémente

//** Étape 2:
let fourColorsToGuess = ["red", "pink", "green", "black"];
let acceptedEightColors = [
  "yellow",
  "purple",
  "orange",
  "blue",
  "red",
  "pink",
  "green",
  "black",
];

function handle8Colors(color1, color2, color3, color4) {
  return (
    acceptedEightColors.includes(color1) &&
    acceptedEightColors.includes(color2) &&
    acceptedEightColors.includes(color3) &&
    acceptedEightColors.includes(color4)
  );
}
//console.log(handle8Colors('red','black','white','grey'))//false
//console.log(handle8Colors('red','black','purple','yellow'))// true
function codeBreakerFour(color1, color2,color3,color4) {
    if (color1 === fourColorsToGuess[0] && color2 === fourColorsToGuess[1] && color3 === fourColorsToGuess[2] && color4 === fourColorsToGuess[3]){
        return true
    }
    return false
}
// console.log(codeBreakerFour('red','black','white','grey'))//false
// console.log(codeBreakerFour('red','black','purple','yellow'))// false
// console.log(codeBreakerFour('red','pink','green','black'))//true

function startGame2(color1, color2,color3,color4) {
    if (nbOfTry < maxTry) {
      if (handle8Colors(color1, color2,color3,color4) === false) {
        return "veuillez choisir une des 8 couleurs proposées";
      } else if (codeBreakerFour(color1, color2,color3,color4) === false) {
        nbOfTry++;
        return `veuillez réessayer, tentative ${nbOfTry}`;
      }
      return "Bravo vous avez réussi à devener les 4 couleurs";
    }
    return "Vous avez atteint le max des tentatives, les coleurs à deviner sont (red,pink,green,black)";
  }
  //console.log(startGame2('red','pink','green'))
  //console.log(startGame2('red','pink','green','black'))
  //console.log(startGame2('red','yellow','green','black')) 


