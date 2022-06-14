// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  let answer = prompt("How many characters wold you like your password to contain?")
  console.log(answer); 

  confirm("Click OK to confirm special characters.");
  confirm("Click OK to confirm including numeric characters.");
  confirm("Click OK to confirm including lowercase characters.");
  confirm("Click OK to confirm inculding uppercase characters.");

  return "*$abir!H2022";
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password22");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);