// Password Generator Code
const generateBtn = document.querySelector("#generate");


function generatePassword() {
// Prompt user to choose a password length of at least 8 characters and no more than 128 characters 
let  passLen = prompt("Provide password length 8 - 128 chars");
let validPassLen = true;
  do{
      if (passLen <8 || passLen >128) {
          validPassLen = false;
          alert("Invalid password length. Provide a length between 8 and 128"); 
          passLen = prompt("Provide password length 8 - 128 chars");
       }
      else {
            validPassLen = true;
           }
    }while (validPassLen === false);
}









//Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
