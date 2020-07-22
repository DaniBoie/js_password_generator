// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

 let passLength = parseInt(prompt('Between 8 - 128, how long would you want your password?'))
 if (passLength < 8 || passLength > 128) {
  alert('Pick a valid number!')
  return
 }




  let characters = {

    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    special: ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':'],

  }

  let password = ''

  for (let i = 0; i < passLength; i++) {

    let pick = Math.floor(Math.random() * 4)

    if (pick === 0) {

      let change = characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]
      password = password + change

    } else if (pick === 1) {

      let change = characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]
      password = password + change

    } else if (pick === 2) {
      let change = characters.numbers[Math.floor(Math.random() * characters.numbers.length)]
      password = password + change

    } else {
      let change = characters.special[Math.floor(Math.random() * characters.special.length)]
      password = password + change
    }

  }

  alert(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Put available characters in an array and check for those when working logic

// pick a random 1-3 then from there pick from available characters

//have a loop attached to length of character count

// let characters = {

//   upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
//   lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
//   numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//   special: ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':'],

// }

// let password = ''

// for (let i = 0; i < 18; i++) {

//   let pick = Math.floor(Math.random() * 4)

//   if (pick === 0) {

//     let change = characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]
//     password = password + change

//   } else if (pick === 1) {

//     let change = characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]
//     password = password + change

//   } else if (pick === 2) {
//     let change = characters.numbers[Math.floor(Math.random() * characters.numbers.length)]
//     password = password + change

//   } else {
//     let change = characters.special[Math.floor(Math.random() * characters.special.length)]
//     password = password + change
//   }

// }

// console.log(password)

// for (let i = 0; i < 5; i++) {
//   console.log(upperCase[Math.floor(Math.random() * upperCase.length)])
// }

// for (let i = 0; i < 5; i++) {
//   console.log(lowerCase[Math.floor(Math.random() * lowerCase.length)])
// }

// for (let i = 0; i < 5; i++) {
//   console.log(numbers[Math.floor(Math.random() * numbers.length)])
// }

// for (let i = 0; i < 5; i++) {
//   console.log(special[Math.floor(Math.random() * special.length)])
// }