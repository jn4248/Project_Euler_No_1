
// Solves Project Euler Problem No. 1:
// calculates the sum of all natural numbers below the limit value, that are
// multiple of either 3 or 5
// argument:  upper limit of numbers to be checked, must be a natural number
// returns an array:  Position 0 = answer;  Positions 1+ = multiples found
function eulerProblem1(limit) {
  var sum = 0;
  var multiples = [1];   //default value for final answer at position 0
  for (i = 1; i < limit; i++) {
    if (i%3==0 || i%5==0) {
      multiples.push(i);        // add the multiple to the array list
      sum += i;
    }
  }
  multiples[0] = sum;
  return multiples;
}

// returns a string from the objects in an array, given a starting position,
// and separating them with a coman and space: "0, 1, 2...""
// Arguments:  array - expects array of numbers
//             starting position - first array item that should be displayed
function displayArray(array, startPosition) {
  var text = array[startPosition].toString();
  for (i = startPosition + 1; i < array.length; i++) {
    text = text + ", " + array[i].toString();
  }
  return text;
}


// set the limiting value
range = 1000;

// primary function call to display the Euler Problem results.
// caluculates solution of Euler Problem No. 1 using function eulerProblem1,
// and then uses function displayArray to show the results.
function calcMultiples() {
  var solution = eulerProblem1(range);
  // display the actual solution
  var solutionText = "The solution is:  " + solution[0] + ".  ";
  let append1 = document.createElement('p');
  append1.innerHTML = solutionText;
  answer.append(append1);
  // append the list of multiples
  var multiplesText = "The mulitples found are:  " + displayArray(solution, 1);
  let append2 = document.createElement('p');
  append2.innerHTML = multiplesText;
  multiplesList.append(append2);
}
