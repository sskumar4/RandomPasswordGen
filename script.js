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

  //Prompt the user for character types to include in the password
  // Variables to store char types that were chosen to form random password
  let includeLC,includeUC,includeNum,includeSpChars;
  let atleastOneCharType = false;
  console.log('atleaseOneCharType at beginning', atleastOneCharType);
  let tries =0;
  do {
    if (tries >0) {
      alert (`To Generate Password, provide atleast one of lowercase, uppercase, numbers or special characters. You may select as many or all of the char types. Atleast one of the character type is a must.`);
    }
   
    // Get user input for lower case characters in the password
    includeLC = confirm("Include lowercase characters in the password (a-z)?");
    console.log("includeLC",includeLC);
    atleastOneCharType ||= includeLC;
    console.log("atleastOneCharType after LC",atleastOneCharType);

    // Get user input for upper case characters 
    includeUC = confirm("Include uppercase characters in the password (A-Z)?");
    atleastOneCharType ||= includeUC;

    // Get user input for numbers 
    includeNum = confirm("Include numbers in the password (0-9)?");
    atleastOneCharType ||= includeNum;

    // Get user input for special character
    includeSpChars = confirm("Include special characters in the password ( !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~) ?");
    atleastOneCharType ||= includeSpChars;
    console.log('atleaseOneCharType',atleastOneCharType);
    if (!atleastOneCharType) {
      tries++;
      }
    } while (atleastOneCharType === false);
    console.log("includeLC",includeLC, "includeUC",includeUC);
    console.log("includeNum",includeNum, "includeSpChars",includeSpChars);
    alert(`We are ready to generate random password\n. Review your  selected password criteria:\n    include lowercase = ${includeLC}\n    include upper case = ${includeUC}\n    include numbers = ${includeNum}\n    include special characters = ${includeSpChars}\n    password Length = ${passLen}\n`
  );
}




//Write password to the #password input
function writePassword() {
   const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
