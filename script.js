
var specialChar =[
  '@',
  '%',
  '+',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
  ';'
];


var numbers = ['0','1','2','3','4','5','6','7','8','9']


var lowerCased = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]


var upperCased=[
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordChoice(){
  var hasSpecialChars = confirm('Click ok to confirm to include special characters in your password');
  var hasUpperChars = confirm('Click ok to confirm to include uppercase characters in your password');
  var hasLowerChars = confirm('Click ok to confirm to include lowercase characters in your password');
  var hasNumbers = confirm('Click ok to confirm to include numbers in your password');


  if (hasSpecialChars === false && hasUpperChars === false && hasLowerChars === false && hasNumbers === falses){
    alert('Must select one option')
    return;
}

var options = {
  hasLowerChars: hasLowerChars,
  hasNumbers : hasNumbers,
  hasUpperChars: hasUpperChars,
  hasSpecialChars: hasSpecialChars
}
return options
}

function getPasswordLength() {
  var userInput = prompt('Please enter a number between 8-128');

  const passwordLength = parseInt(userInput);
  if (isNaN(passwordLength)) {
    window.alert('Please input a valid number');
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Please input a number between 8 and 128');
  } else {
    return passwordLength;
  }
}

function generatePassword() {
  const passwordOption = getPasswordChoice();
  const passwordLength = getPasswordLength();
  let possibleCharacters = [];
  let password = '';

  if (passwordOption.hasLowerChars) {
    possibleCharacters = possibleCharacters.concat(lowerCased);
  }
  
  if (passwordOption.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  
  if (passwordOption.hasUpperChars) {
    possibleCharacters = possibleCharacters.concat(upperCased);
  }
  
  if (passwordOption.hasSpecialChars) {
    possibleCharacters = possibleCharacters.concat(specialChar);
  }

  
  console.log('possibleCharacters5', typeof possibleCharacters, possibleCharacters)

  for (let i = 0; i < passwordLength; i++) {
    let rng = Math.floor(Math.random() * possibleCharacters.length);
    console.log('rng', rng)
    password += possibleCharacters[rng];
    console.log('possibleCharacters[rng]', possibleCharacters[rng])
    console.log('password', password)
  }

  console.log(password)

  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



