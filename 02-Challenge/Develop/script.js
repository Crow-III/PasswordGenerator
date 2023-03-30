// Assignment Code
const charlength = document.getElementById
('charlength')
const charNumber = document.getElementById
('CharNumber')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('password')





 const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
 const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
 const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
 const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)

 form.addEventListener('submit', e => {
   e.preventDefault()
   const characterAmount = characterAmount.value
   const includeUppercase = includeUppercaseElement.checked
   const includeLowercase = includeLowercaseElement.checked
   const includeNumbers = includeNumbersElement.checked
   const includeSymbols = includeSymbolsElement.checked
   const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) 
  passwordDisplay.innertext = password
 })

function synccharacterAmount(e) {
  const value = e.target.value
  charNumber.value = value
  charlength.value = value
}
charNumber.addEventListener('input', synccharacterAmount)
charlength.addEventListener('input', synccharacterAmount)


function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
{
 let charCodes = (includeLowercase = LOWERCASE_CHAR_CODES)
 if (includeUppercase) charCodes = charCodes.concat
  (UPPERCASE_CHAR_CODES)
 if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
 if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
 const passwordCharacters = []
 for (let i = 0; i < characterAmount, i++;) {
 const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
 passwordCharacters.push(string.fromCharCode(characterCode))
}
 return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
 const array = []
 for (let i =low; i <= high; i++) {
  array.push(i)
 }
 return array
}

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


