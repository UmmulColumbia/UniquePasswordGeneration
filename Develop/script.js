// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";

  // add code to change passqword variable.
  var length;

  do {
    // Prompt for password length
    length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

    // Validate password length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Password length must be a number between 8 and 128.");
    }
  } while (isNaN(length) || length < 8 || length > 128);
  
  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected.");
    return ""; // Return empty string if no character type is selected
  }

  // Define character sets based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+{}[]|\\:;\"'<>,.?/";

  var allCharacters = "";
  if (includeLowercase) allCharacters += lowercaseChars;
  if (includeUppercase) allCharacters += uppercaseChars;
  if (includeNumeric) allCharacters += numericChars;
  if (includeSpecial) allCharacters += specialChars;

  // Generate password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  // window.prompt
  // window.confirm

  return password; // return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





