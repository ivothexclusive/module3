var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
  var passwordLength = parseInt(
    prompt("Choose a password length required from 8 to 128 characters")
  );

  // Validate the password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "~!@#$%^&*()_+";
  var numericChars = "0123456789";

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useSpecialChars = confirm("Include special characters?");
  var useNumericChars = confirm("Include numeric characters?");

  // Check if at least one character set is selected
  if (!useLowercase && !useUppercase && !useSpecialChars && !useNumericChars) {
    alert("You must select at least one character set.");
    return;
  }

  var charset = "";
  if (useLowercase) charset += lowercaseChars;
  if (useUppercase) charset += uppercaseChars;
  if (useSpecialChars) charset += specialChars;
  if (useNumericChars) charset += numericChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Function to write the generated password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add an event listener to the generate button
generateBtn.addEventListener("click", writePassword);
