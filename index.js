let name = "Luis Villada";
let age = 28;
let isStudent = true; 
let undefined; 
let nulVal = null;
console.log(undefined);
console.log(nulVal);

const prompt = require("prompt-sync")();
/*
let yOB = prompt("Enter your birth year: ");

let result = 2025 - yOB

console.log("you are ", result ," years old" );


let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter a second number: ");

sum = num1 + num2 
console.log(sum);

let age2 = prompt("Enter your age: ");

if(age2 >= 18){
    console.log("You can come in");
    
} else {
    console.log("You can't come in");
}

let num = prompt("Enter a number: ")

if(num <0){
 console.log("It's a negative number");

} else if (num > 0){
 console.log("It's positive number");
 
} else if(num ==0){
 console.log("It's zero");
 
}

console.log("Let's use while conditional");

let count = prompt("Enter a number and I'll count until reach it: ")
let i = 1;  
while(i <= count){
    console.log("number: ", i);
    i++
};
*/
let password;
let pass = 1234
while (password != pass ){
 console.log("Wrong password, try again");
 
password = prompt("Enter a password: ") 

if (password == pass ){
 console.log("\nThanks for confirming your password\n\n");
 
}

}

for (let i = 1; i<= 10; i++){
 console.log("numero: ", i);
 

}
let numFor = prompt(" Enter a number I'll test a bucle for: ")
for (let i = 1; i <= numFor; i++) {
 console.log("numero: ", i);


}