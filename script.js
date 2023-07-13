var includeUppercaseElement = document.getElementById('includeUppercase')
var includeLowercaseElement = document.getElementById('includeLowercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('password')
var passwordLength = document.getElementById('CharNumber')


 function generatePassword(){
  var password 
  var characterAmount = CharNumber.value
   var includeUppercase = includeUppercaseElement.checked
   var includeLowercase = includeLowercaseElement.checked
   var includeNumbers = includeNumbersElement.checked
   var includeSymbols = includeSymbolsElement.checked
   
   var password = " "
   
   for (var i=0;i <= characterAmount-1;  i++){
     //check if user wants uppercase
     if (includeUppercase === true){
       password+=characterSelect(65,90)
     }
     //check if user wants lowercase
      if (includeLowercase === true){
        password+=characterSelect(97,122)
     }
     //check if user wants numbers
      if (includeNumbers === true){
        password+=characterSelect(48,57)
         }
     //check if user wants symbols
      if (includeSymbols === true){
        password+=characterSelect(33,47)
         }
         
         console.log(password);
   var options = {
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeNumbers, 
    includeSymbols,
  }
  console.log(options);
  
  return password
   }}
   
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


  
