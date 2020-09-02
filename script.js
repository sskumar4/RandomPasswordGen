// Password Generator Code
const generateBtn = document.querySelector("#generate");


function generatePassword() {
  // Prompt user to choose a password length of  8-128 characters
  let  passLen = prompt("Provide a password length between 8-128 characters");

  //variables needed for validation and generation of random password
  let validPassLen = true;
  let totalChars = '';
  let generatedPassword = '';

  //process password length from user and re-prompt if needed
  do{
      if (passLen <8 || passLen >128) {
          validPassLen = false;
          alert("Invalid password length. Provide a length between 8-128"); 
          passLen = prompt("Provide a password length between 8-128 characters");
       }
      else {
            validPassLen = true;
           }
    }while (validPassLen === false);

  //Prompt the user for character types to include in the password
  // Variables to store char types that were chosen to form random password
  let includeLC, includeUC, includeNum, includeSpChars;
  let atleastOneCharType = false;

  console.log('atleaseOneCharType at beginning', atleastOneCharType);
 
  //to know if user's first attempt did not have any one of the char types
  let attempts = 0;
  do {
    if (attempts > 0) {
      alert ('Password not generated, Try again and choose atleast one char type');
    };

    alert (`To Generate a Password, provide atleast one of lowercase, uppercase, numbers or special characters. You may select as many or all of the character types. Atleast one of the character type is a must.`);
    
    // Get user input for lowercase characters in the password
    includeLC = confirm("Include lowercase characters in the password (a-z)?");
    console.log("includeLC",includeLC);

    //add lowercase letters to totalChars if required
    (includeLC) ? totalChars  += 'abcdefghijklmnopqrstuvwxyz': "";
    console.log('totalChars', totalChars);
    
    atleastOneCharType ||= includeLC;
    console.log("atleastOneCharType after LC", atleastOneCharType);

    //get user input for uppercase characters 
    includeUC = confirm("Include uppercase characters in the password (A-Z)?");

    //add upper case letters to totalChars if required
    (includeUC ) ? totalChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ': "";    
    atleastOneCharType ||= includeUC;
    console.log('totalChars', totalChars);

    // Get user input for numbers 
    includeNum = confirm("Include numbers in the password (0-9)?");

    //add numbers to totalChars if required
    (includeNum ) ? totalChars += '0123456789': ""; 
    atleastOneCharType ||= includeNum;
    console.log('totalChars', totalChars);

    // Get user input for special character
    includeSpChars = confirm("Include special characters in the password ( !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~) ?");

    //add special chars to totalChars if required
    (includeSpChars ) ? totalChars += ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~': "";
    atleastOneCharType ||= includeSpChars;
    console.log('atleaseOneCharType',atleastOneCharType);
    if (!atleastOneCharType) {
      attempts++;
      }
    } while (atleastOneCharType === false);
    console.log("includeLC",includeLC, "includeUC",includeUC);
    console.log("includeNum",includeNum, "includeSpChars",includeSpChars);

    alert(`Review your  selected password criteria:\n    include lowercase = ${includeLC}\n    include upper case = ${includeUC}\n    include numbers = ${includeNum}\n    include special characters = ${includeSpChars}\n    password Length = ${passLen}\n`
  );

  // Now generate the password randomly from the totalChars
  for (let i=0 ; i < passLen; i++) {
    generatedPassword += totalChars[Math.floor(Math.random() * totalChars.length)];
}
console.log(generatedPassword);
return (generatedPassword);

}


//Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
