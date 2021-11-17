// This script generates a unique password with 8-128 characters based on criteria the user specifies.

//prompting questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables
var confirmLength = "";
var confirmSpecialCharacter, confirmNumericCharacter, confirmUpperCase, confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  confirmLength = (prompt("How long of a password would you like (8-128)?"));
if (confirmLength === null) {
  return; //break out of the function early 
}
  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Your password must be between 8-128 characters. Please try again.");
      confirmLength = (prompt("State how many characters you would like in your password: "));
      } 

  // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine specification of password 
    confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
    
    
    // Loop if none of the specification are selected
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one");
        confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

document.getElementById("generate").addEventListener("mouseenter", function() {
  document.getElementById("generate").style.backgroundColor = "blue";
})
document.getElementById("generate").addEventListener("mouseleave", function() {
  document.getElementById("generate").style.backgroundColor = "hsl(360, 91%, 36%)";
})

