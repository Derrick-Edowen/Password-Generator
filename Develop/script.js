// Assignment code here
var userChoice;
var getNumber;
var getSymbol;
var getUpper;
var getLower;


Symbols = ["!", "@","#","$","%","^","&","*","*","(",")","-","=","[","]","{","}","/","<",">",";",":","_","`","~","?",];
Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
Lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
Numbers = [1,2,3,4,5,6,7,8,9,0]

var input;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//var password = generatePassword();
  //
 //passwordText.value = password;
// Write password to the #password input
generateBtn.addEventListener("click", function () {
pass = generatePassword();
document.getElementById("password").textContent = pass;
});

function generatePassword() {
userChoice =  window.prompt("How many characters would you like your password to have?");

if (!userChoice) {
  window.alert("Invalid Entry: Please try again!");
} else if (userChoice < 8 || userChoice > 128) {
  userChoice = window.alert("Sorry - Password character length must between between 8 and 128");
  generatePassword();
} else {
  getSymbol = window.confirm("Will the password contain special characters?");
  getNumber = window.confirm("Will the password contain numbers?");
  getUpper =  window.confirm("Will the password contain upper cases?");
  getLower = window.confirm("Will the password contain lower cases?");
};
//4 Cancel
if (!getSymbol && !getNumber && !getUpper && !getLower) {
 input  = window.alert("Invalid Entry: At least one criteria must be chosen!");
 generatePassword();
//All 4 are TRUE
} else if (getSymbol && getNumber && getUpper && getLower) {
  input = Symbols.concat(Upper,Lower,Numbers);
}
//3 are TRUE
else if (getSymbol && getNumber && getUpper) {
  input = Symbols.concat(Numbers,Upper);
}
else if (getSymbol && getNumber && getLower) {
  input = Symbols.concat(Numbers,Lower);
}
else if (getSymbol && getUpper && getLower) {
  input = Symbols.concat(Upper,Lower);
}
else if (getNumber && getUpper && getLower) {
  input = Numbers.concat(Upper,Lower);
}
//2 are TRUE
else if (getSymbol && getNumber) {
  input = Symbols.concat(Numbers);

} else if  (getSymbol && getUpper) {
  input = Symbols.concat(Upper);

} else if (getSymbol && getLower) {
  input = Symbols.concat(Lower);

} else if (getLower && getNumber) {
  input = Lower.concat(Numbers);
  
} else if (getLower && getUpper) {
  input = Lower.concat(Upper);

} else if (getUpper && getNumber) {
  input = Upper.concat(Numbers)
}
//1 is TRUE
else  if (getSymbol) {
  input = Symbols;
}
else if (getNumber) {
input = Numbers;
} 
else if (getUpper) {
  input = Upper;
}
else if (getLower) {
  input = Lower;
};

var password = [];

for (var i = 0; i < userChoice; i++) {
  var theInput = input[Math.floor(Math.random() * input.length)];
  password.push(theInput);
}

var pass = password.join("");
return pass;
}
function UserInput(pass) {
  document.getElementById("password").textContent = pass;
}
