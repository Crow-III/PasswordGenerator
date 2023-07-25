var includeUppercaseElement = document.getElementById('includeUppercase')
var includeLowercaseElement = document.getElementById('includeLowercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('password')
var passwordLength = document.getElementById('CharNumber')


function generatePassword() {
  var characterAmount = passwordLength.value;
  var includeUppercase = includeUppercaseElement.checked;
  var includeLowercase = includeLowercaseElement.checked;
  var includeNumbers = includeNumbersElement.checked;
  var includeSymbols = includeSymbolsElement.checked;

  var selectedOptionsCount = [includeUppercase, includeLowercase, includeNumbers, includeSymbols].filter(Boolean).length;
  var charactersPerType = Math.floor(characterAmount / selectedOptionsCount);
  var password = "";

  var types = [];
  if (includeUppercase) types.push('uppercase');
  if (includeLowercase) types.push('lowercase');
  if (includeNumbers) types.push('numbers');
  if (includeSymbols) types.push('symbols');

  for (var i = 0; i < charactersPerType; i++) {
    types.forEach(function(type) {
      switch (type) {
        case 'uppercase':
          password += characterSelect(65, 90);
          break;
        case 'lowercase':
          password += characterSelect(97, 122);
          break;
        case 'numbers':
          password += characterSelect(48, 57);
          break;
        case 'symbols':
          password += characterSelect(33, 47);
          break;
      }
    });
  }

  // Add any remaining characters to the password to match the specified length
  for (var i = password.length; i < characterAmount; i++) {
    password += characterSelect(33, 122); // A broad range of characters (33 to 122) to fill up the remaining spaces.
  }

  return password;
}

   
   
   form.addEventListener('submit', e => {
    e.preventDefault()
  
    var password = generatePassword() 
   passwordDisplay.value = password
   console.log('formsubmitted')
   })
  
  
   
   function characterSelect(min, max){
    //var randomSelection = String.fromCharCode(Math.floor(Math.random()))
    var randomSelection = String.fromCharCode(Math.floor(Math.random()*((max+ 1)-min)+min))
    return randomSelection
    }


  
