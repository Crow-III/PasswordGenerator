// Assignment Code
 var includeUppercaseElement = document.getElementById('includeUppercase')
 var includeLowercaseElement = document.getElementById('includeLowercase')
 var includeNumbersElement = document.getElementById('includeNumbers')
 var includeSymbolsElement = document.getElementById('includeSymbols')
 var form = document.getElementById('passwordGeneratorForm')
 var passwordDisplay = document.getElementById('password')
 var passwordLength = document.getElementById('CharNumber')




 form.addEventListener('submit', e => {
  e.preventDefault()

  var password = generatePassword() 
 passwordDisplay.value = password
 console.log(password);
console.log('formsubmitted')
 })

 var includeLowercaseEl = String.fromCharCode(97, 122)
 console.log(includeLowercaseEl);



//  var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", generatePassword);

function generatePassword(){
 var password 
 var characterAmount = CharNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeLowercase = includeLowercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  
  var generatedpassword = ""
  
  for (var i=0;i <= characterAmount-1;  i++){
    // var numbers = String.fromCharCode(Math.floor(Math.random(, ) * 9 ))
    // console.log(numbers)
    // Uppercase are from 65 to 90
    //Lowercase are 97 to 122
    //specials are 33 to 47

    //check if user wants uppercase
    if (includeUppercase === true){
      generatedpassword+=characterSelect(65,90)
    }
    //check if user wants lowercase
     if (includeLowercase === true){
      characterSelect(97,122)
    }
    //check if user wants numbers
        if (includeNumbers === true){
          characterSelect(48,57)
        }

    //check if user wants symbols
        if (includeSymbols === true){
          characterSelect(33,47)
        }

  }
  console.log({generatedpassword})


  var options = {
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeNumbers, 
    includeSymbols,
  }
  console.log(options);
  password = '123'
  return password
}
var personName = "james"

var person = {
personName,


}
console.log(person);
//for (var i = 0; i <= passwordLength; i++) {
 // var password = Math.floor(Math.random() * chars.length);
 // password += chars.substring(, r +1);
 //}



 // Write password to the #password input
// Add event listener to generate button
function characterSelect(min, max){
//var randomSelection = String.fromCharCode(Math.floor(Math.random()))
var randomSelection = String.fromCharCode(Math.floor(Math.random()*((max+ 1)-min)+min))
return randomSelection
}
characterSelect(65,90);
characterSelect(97,122);


