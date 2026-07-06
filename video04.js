// arays on javascript -> objects

// legend (*) methods that don't change original array
//        (**) methods that change original array

const prompt = require("prompt-sync")();

let arr = ["Hashir", "Haris", "Mirub", "Moosa", "Noreen", "Rashid"];

let universal = ["Lahore", true, 88, 67.22, 'a'];


for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let val of arr) {
    console.log(val);
}

for(let idx in arr) {
    console.log(arr[idx]);
}


// practice


let marks = [87, 56, 99, 91, 73, 66, 87];

let sum = 0;

for(let el of marks) {
    sum += el;
}

let average = sum / marks.length;

console.log(`The average is ${average}.`);


// practice 02

let prices = [200, 350, 620, 800, 325, 770];

for(let idx in prices) {
    prices[idx] *= 0.9;
}

for(let el of prices) {
    console.log(el);
}



// array methods


marks.push(81); //** adds elements at the end
marks.push(93, 51, 69);

let deleted = marks.pop(); //** deletes the last element and returns it

console.log(deleted);

console.log(marks.toString()); //* converts an array into a string


let temp = marks.concat(prices); //* joins multiple arrays

console.log(temp);


arr.unshift("Abrar"); //** adds element at the start

console.log(arr);

let name = arr.shift(); //** deletes element from the last and returns

console.log(name);

let arr2 = marks.slice(2, 7); //* returns element from starting to end - 1

console.log(arr2);

marks.splice(2, 2, 33, 44); //** splice(startIdx, delCount, newEl1...)

console.log(marks);


// Practice 3

let companies = [];

let company;

do {
    company = prompt("Enter a Comapny name (E for exit): ");
    if(company !== "E") {
        companies.push(company);    
    }
} while(company !== "E");

companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");

for(let el of companies) {
    console.log(el);
}








