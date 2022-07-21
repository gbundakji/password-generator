var generateBtn = document.querySelector("#generate");

// Arrays of character options allowed
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "`", "{", "|", "}", "~", "]"];

numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "O", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var option;

var userChoice;

var allowSpecial;

var allowNumeric;

var allowLowercase;

var allowUppercase;
 
// The function used to generate password
function generatePassword() {

    // Prompting user to insert character choice
    userChoice = parseInt(prompt("How many characters would you like your password to contain? You must choose between 8 and 128 characters"));
  
    if (!userChoice) {
        alert("Please insert a valid value to proceed");
    } else if (userChoice < 8 || userChoice > 128) {
      
        userChoice = parseInt(prompt("You must choose between 8 and 128 characters!"));

    // Confirmation alerts requiring user to choose if they want a specific character or not   
    } else {

        // Confirming addition of numeric characters
        allowNumeric = confirm("Click OK to confirm including numeric characters");

        // Confirming addition of special characters
        allowSpecial = confirm("Click OK to confirm including special characters");

        // Confirming addition of uppercase characters
        allowUppercase = confirm("Click OK to confirm including uppercase characters");

        // Confirming addition of lowercase characters
        allowLowercase = confirm("Click OK to confirm including lowercase characters");
    };
 
    // Alert if user does not input correct key/amount
    if (!allowSpecial && !allowNumeric && !allowUppercase && !allowLowercase) {
        option = alert("You must choose at least one of the criteria!");

        // else if statements for different user responses to alerts
        } else if (allowSpecial && allowNumeric && allowUppercase && allowLowercase) {
        option = special.concat(numeric, lowercase, uppercase);

        } else if (allowSpecial && allowNumeric && allowUppercase) {
        option = special.concat(numeric, uppercase);

        } else if (allowSpecial && allowNumeric && allowLowercase) {
        option = special.concat(numeric, lowercase);

        } else if (allowSpecial && allowLowercase && allowUppercase) {
        option = special.concat(lowercase, uppercase);

        } else if (allowNumeric && allowLowercase && allowUppercase) {
        option = numeric.concat(lowercase, uppercase);

        } else if (allowSpecial && allowNumeric) {
        option = special.concat(numeric);

        } else if (allowSpecial && allowLowercase) {
        option = special.concat(lowercase);

        } else if (allowSpecial && allowUppercase) {
        option = special.concat(uppercase);

        } else if (allowLowercase && allowNumeric) {
        option = lowercase.concat(numeric);

        } else if (allowLowercase && allowUppercase) {
        option = lowercase.concat(uppercase);

        } else if (allowNumeric && allowUppercase) {
        option = numeric.concat(uppercase);

        } else if (allowSpecial) {
        option = special;

        } else if (allowNumeric) {
        option = numeric;

        } else if (allowLowercase) {
        option = lowercase;

        } else if (allowUppercase) {
        option = uppercase;
    };

    var password = [];

    // Generating a random output of all characters allowed
    for (var i = 0; i < userChoice; i++) {
        var confirmOp = option[Math.floor(Math.random() * option.length)];
        password.push(confirmOp);
    }
  
    return password;
}

// Generating password in the 'your secure password' box
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword();