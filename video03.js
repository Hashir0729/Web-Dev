// for loop

let sum = 0;

for(let i = 0; i < 10; i++) {
  sum += i;
}

console.log(sum);


// while loop

let i = 0;
while(i < 10) {
  console.log("Hashir Ahmed.");
  i++;
} 


// do-while loop

let j = 0;

do {
  console.log("Hi");
  j++;
} while(j < 0);


// for-of loop -> strings, arrays

let uni = "FAST NUCES Lahore";

for(let val of uni) {
  console.log(val);
}


// for-in loop -> objects, arrays

let student = {
  name: "Hashir Ahmed",
  age: 21,
  cgpa: 3.2,
  isPass: true
}

for(let val in student) {
  console.log("Key =", val, ", Value =", student[val]);
  // val = key(s) in object here
}



// practice

for(let i = 0; i <= 100; i += 2) {
  console.log(i);
}

let gameNumber = 7;


const prompt = require("prompt-sync")();

let userNumber;

do {
  userNumber = prompt("Guess a number: ");  // always returns a string
} while(userNumber != gameNumber);



// strings in javascript (immutable)

let str1 = "FAST NUCES";
let str2 = 'Hashir Ahmed';


console.log(str2.length);

for(let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}



// template literals in javscript (string interpolation)

let obj = {
  item: "book",
  price: 50
};

let tpl = `The price of ${obj.item} is ${obj.price}.`;

console.log(tpl);


// string methods -> do not change the original strings (return a new value)

console.log(str2.toUpperCase());
console.log(str1.toLowerCase());

let str3 = "       Hi, I am a Backend AI Engineer.     ";
console.log(str3);
console.log(str3.trim()); // remove spaces form starting and ending


console.log(str2.slice(2, 8)); // slice(start, end?): returns part of string where end is optional and not inclusive



console.log(str1.concat(str2)); // str1.concat(str2) joins str1 and str2
console.log(str1 + str2); // same as concatenation


str4 = str2.replace("H", "M"); // str.replace(searcVal, newVal) replaces characters or substrings

console.log(str4);


console.log(str4.charAt(3)); // str.charAt(index) returns a charecter at index


// practice2

let username = prompt("Enter your fullname (without spaces):");
length = username.length;
username = username.toLowerCase();
username = "@" + username;
username = username.concat(length);

console.log(`Your Username is: ${username}.`);



// done with video03