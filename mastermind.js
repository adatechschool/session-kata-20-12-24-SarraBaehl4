//** Étape 1:

let colorsToGuess = ['red','black'];
const maxTry = 12;
let nbOfTry = 0;
const acceptedColors = ['red','pink','green','black'];

//fonction pour s'assurer que les 4 couleurs sont respectées ou non:
function handleacceptedColors(color1, color2) {
  return (acceptedColors.includes(color1) && acceptedColors.includes(color2));
}
// console.log(handleacceptedColors('blue','red'));// false
// console.log(handleacceptedColors('pink','black'))// true

//Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non:
function codeBreaker(color1, color2) {
    let color1IsValide = false
    let color2IsValide = false
  for (let i = 0; i < colorsToGuess.length; i++) {
    if (color1 === colorsToGuess[i]) {
      color1IsValide = true;
    }
    if (color2 === colorsToGuess[i]) {
      color2IsValide = true;
    }
  }
  return color1IsValide && color2IsValide;
}
// console.log(codeBreaker("red", "pink")); // false
// console.log(codeBreaker("black", "blue")); // false
// console.log(codeBreaker('red','black')); //true

//Une fonction qui gère la partie (continuer tant que/fin si gagné)
function startGame(color1,color2){
    if (nbOfTry < maxTry){
    if(handleacceptedColors(color1,color2) ===false){
        return 'veuillez choisir une des 4 couleurs proposées'
    }else if (codeBreaker(color1,color2)===false){
        nbOfTry++;
        return `veuillez réessayer, tentative ${nbOfTry}`; 
    }
    return 'Bravo vous avez réussi à devener les 2 couleurs'
}
return 'Vous avez atteint le max des tentatives, les coleurs à deviner sont (red,balck)'
}
console.log(startGame('red','pink'));
console.log(startGame('red','green'));
console.log(startGame('black','pink'));
console.log(startGame('red','pink'));
console.log(startGame('red','green'));
console.log(startGame('black','pink'));
console.log(startGame('red','pink'));
console.log(startGame('red','green'));
console.log(startGame('black','pink'));
console.log(startGame('red','pink'));
console.log(startGame('red','green'));
console.log(startGame('black','pink'));
console.log(startGame('black','pink'));


