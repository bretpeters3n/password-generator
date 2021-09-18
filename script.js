// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare initial variables
var numberOfCharacters = 0;
var specialCharsAllowed = null;
var numbersAllowed = null;
var lowerCaseAllowed = null;
var upperCaseAllowed = null;

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

// Step 0: This function opens the first window to assist the user in generating a password
function initiateGeneratePassword() {
  // Window asking if the user wants to continue
  var answer = window.confirm(
    // This is the message the user receives
    "You are about to generate a password. Continue?"
  );
  // If the user clicks 'OK' they are then presented with the next step.
  // Pressing 'Cancel' stops the process
  if (answer) {
    console.log("Ok has been pressed");
    askHowManyCharacters();
  } else {
    console.log("Process cancelled");
    return;
  }
}

// Step 1: Opens second window
function askHowManyCharacters() {
  // Window asking the user how many characters they would like to use in their password
  var answer = window.prompt(
    "(Step 1 of 5)\nHow many characters would you like to have in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    askSpecialCharsAllowed();
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set numberOfCharacters to what was entered
  numberOfCharacters = answer;
  console.log("Consoling what was entered " + numberOfCharacters);
}

// Step 2: Opens second window
function askSpecialCharsAllowed() {
  var answer = window.confirm(
    "(Step 2 of 5)\nWould you like to use special characters in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    askNumbersAllowed();
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set specialCharsAllowed to true or false
  specialCharsAllowed = answer;
}

// Step 3: Opens second window
function askNumbersAllowed() {
  var answer = window.confirm(
    "(Step 3 of 5)\nWould you like to use numbers in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    askLowerCaseAllowed();
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set lowerCaseAllowed to true or false
  numbersAllowed = answer;
}

// Step 4: Opens second window
function askLowerCaseAllowed() {
  var answer = window.confirm(
    "(Step 4 of 5)\nWould you like to use lower case letters in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    askUpperCaseAllowed();
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set lowerCaseAllowed to true or false
  lowerCaseAllowed = answer;
}

// Step 5: Opens second window
function askUpperCaseAllowed() {
  var answer = window.confirm(
    "(Step 5 of 5)\nWould you like to use UPPER case letters in your password?"
  );
  // Take answer and move to next step of cancel process
  if (answer) {
    console.log(answer);
    generatePassword();
  } else {
    console.log("Process cancelled");
    return;
  }
  // Set upper CaseAllowed to true or false
  upperCaseAllowed = answer;
}

//...
function generatePassword() {
  console.log("Consoling what was entered " + numberOfCharacters);
  console.log();
  var finalPassword = "";
  // numberOfCharacters = askHowManyCharacters();
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
generateBtn.addEventListener("click", initiateGeneratePassword);
