// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare initial variables
var numberOfCharacters = 0;
var specialCharsAllowed = null;
var numbersAllowed = null;
var lowerCaseAllowed = null;
var upperCaseAllowed = null;

// Declare arrays
var charactersToPickFrom = [];

/* Psuedo coding
  - Need to know how many characters the password will have
  - Need to know are special characters included
  - Need to know are numbers included
  - Need to know are lower case letters included
  - Need to know are upper case letters included

  - Build final list of possible sharacters

  How can we build our passwork one letter at a time?
    For each character needed, grab a random element from the allowed list

*/

// Step 1: Opens second window
function askHowManyCharacters() {
  // Window asking the user how many characters they would like to use in their password
  var answer = window.prompt(
    "(Step 1 of 5)\nHow many characters would you like to have in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    return answer;
  } else {
    console.log("Process cancelled");
    return;
  }
}

// Step 2: Opens second window
function askSpecialCharsAllowed() {
  var answer = window.confirm(
    "(Step 2 of 5)\nWould you like to use special characters in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    return answer;
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set specialCharsAllowed to true or false
  specialCharsAllowed = answer;
}

//...
function addSpecialCharacters() {
  console.log("Add special characters");

  // this takes the character array and adds special characters
  // this is done one by one for 'special character' syntax issue reasons and is STILL MISSING CHARACTER '\'
  charactersToPickFrom.push(
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "`",
    "|",
    "~"
  );
  charactersToPickFrom.push("]");
  charactersToPickFrom.push("_");
  charactersToPickFrom.push("{");
  charactersToPickFrom.push("}");
  charactersToPickFrom.push("^");

  console.log(charactersToPickFrom);
}

// Step 3: Opens second window
function askNumbersAllowed() {
  var answer = window.confirm(
    "(Step 3 of 5)\nWould you like to use numbers in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    return answer;
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set lowerCaseAllowed to true or false
  numbersAllowed = answer;
}

//...
function addNumbersAllowed() {
  // this takes the character array and adds numbers
  console.log("Add number characters");
  numbers = "0123456789".split("");
  console.log(numbers);
  console.log(charactersToPickFrom);
  charactersToPickFrom = [...charactersToPickFrom, ...numbers];
  console.log(charactersToPickFrom);
}

// Step 4: Opens second window
function askLowerCaseAllowed() {
  var answer = window.confirm(
    "(Step 4 of 5)\nWould you like to use lower case letters in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    return answer;
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set lowerCaseAllowed to true or false
  lowerCaseAllowed = answer;
}

//...
function addLowerCaseAllowed() {
  // this takes the character array and adds lower case letters
  console.log("Add lower case characters");
  lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(lowerCaseCharacters);
  console.log(charactersToPickFrom);
  charactersToPickFrom = [...charactersToPickFrom, ...lowerCaseCharacters];
  console.log(charactersToPickFrom);
}

// Step 5: Opens second window
function askUpperCaseAllowed() {
  var answer = window.confirm(
    "(Step 5 of 5)\nWould you like to use UPPER case letters in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    return answer;
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set upper CaseAllowed to true or false
  upperCaseAllowed = answer;
}

//...
function addUpperCaseAllowed() {
  // this takes the character array and adds UPPER case letters
  console.log("Add upper case characters");
  upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(upperCaseCharacters);
  console.log(charactersToPickFrom);
  charactersToPickFrom = [...charactersToPickFrom, ...upperCaseCharacters];
  console.log(charactersToPickFrom);
}

//...
function generatePassword() {
  // Declare finalPassword variable
  var finalPassword = "";
  // Trigger first of 5 functions to the user. The action/answer is passed to a variable
  numberOfCharacters = askHowManyCharacters();
  specialCharsAllowed = askSpecialCharsAllowed();

  if (specialCharsAllowed) {
    addSpecialCharacters();
  }

  numbersAllowed = askNumbersAllowed();

  if (numbersAllowed) {
    addNumbersAllowed();
  }

  lowerCaseAllowed = askLowerCaseAllowed();

  if (numbersAllowed) {
    addLowerCaseAllowed();
  }

  upperCaseAllowed = askUpperCaseAllowed();

  if (numbersAllowed) {
    addUpperCaseAllowed();
  }

  console.log(
    "Code has made it through the 5 steps. This was entered: " +
      numberOfCharacters +
      " " +
      specialCharsAllowed +
      " " +
      numbersAllowed +
      " " +
      lowerCaseAllowed +
      " " +
      upperCaseAllowed
  );

  //...
  // return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
