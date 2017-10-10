
// set the limiting value of multiples to consider (not inclusive)
let range = 1000;
let alreadyRanCalculation = false;

let calcButton = document.getElementById("calcMultiples");
calcButton.onclick = function() {calcMultiples()};


// Solves Project Euler Problem No. 1:
// calculates the sum of all natural numbers below the limit value, that are
// multiple of either 3 or 5
// argument:  upper limit of numbers to be checked, must be a natural number
// returns an array:  Position 0 = answer;  Positions 1+ = multiples found
function eulerProblem1(limit) {
  let sum = 0;
  let multiples = [];
  for (let i = 1; i < limit; i++) {
    if (i%3 === 0 || i%5 === 0) {
      multiples.push(i);        // add the multiple to the array list
      sum += i;
    }
  }
  multiples.unshift(sum);  // add solution to position 0
  return multiples;
}


// returns a string from the objects in an array, given a starting position,
// and separating them with a coman and space: "0, 1, 2...""
// Arguments:  array - expects array of numbers
//             starting position - first array item that should be displayed
function displayArray(array, startPosition) {
  let text = array[startPosition].toString();
  for (let j = startPosition + 1; j < array.length; j++) {
    text = text + ", " + array[j].toString();
  }
  return text;
}


// primary function call to display the Euler Problem results.
// caluculates solution of Euler Problem No. 1 using function eulerProblem1,
// and then uses function displayArray to show the results.
  function calcMultiples() {
  if (!alreadyRanCalculation) {
  let solution = eulerProblem1(range);
  // display the actual solution, stored in position 0 or the array by design
  let solutionText = "The solution is:  " + solution[0] + ".  ";
  let append1 = document.createElement('p');
  append1.innerHTML = solutionText;
  answerField.append(append1);
  // append the list of multiples
  let multiplesText = "The mulitples found are:  " + displayArray(solution, 1);
  let append2 = document.createElement('p');
  append2.innerHTML = multiplesText;
  answerField.append(append2);
  //update boolean to prevent appending answer multiple times
  alreadyRanCalculation = true;
  } else {
    window.alert("Thank you, but the solution \nhas already been displayed");
  }
}
