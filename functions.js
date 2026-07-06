const prompt = require("prompt-sync")();

// function in javascript


// function call -> arguments
// function definition -> parameters



// simple functions

function write(temp) {
    console.log(temp);
}

// arrow functions -> generally for smaller works

const sum = (a, b) => {
    return a + b;
};


let temp = sum(3, 8);

console.log(temp);

console.log("\n");


// practice 01

function countVowels(word) {
    let count = 0;
    for(let el of word) {
        let temp = el.toLowerCase();
        if(temp === 'a' || temp === 'e' || temp === 'i' || temp ==='o' || temp === 'u') {
            count++;
        }
    }

    return count;
}



const countVowels2 = (word) => {
    let count = 0;
    for(let el of word) {
        let temp = el.toLowerCase();
        if(temp === 'a' || temp === 'e' || temp === 'i' || temp ==='o' || temp === 'u') {
            count++;
        }
    }

    return count;
}



console.log(countVowels2("AEIOU"));

console.log("\n");

// general function -> function
// fuction associated with objects -> method

// for-each loop for arrays (array method)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printNumber = (num) => {
    console.log(num);
};

// way01
numbers.forEach(printNumber);

console.log("\n");


// way02
numbers.forEach(function(element) {
    console.log(element);
});


console.log("\n");

// way03
numbers.forEach((element) => {
    console.log(element);
});
console.log("\n");



// higher order functions: the functions which either take another function as parameter or return another function or both. (interview question) e.g., forEach()



// practice 02

let pracNum = [2, 4, 3, 6, 9, 7];

pracNum.forEach((element) => {
    console.log(element * element);
});

console.log("\n");



// more array methods

// a way to make a new arra with  the results of an array after callback function applied on each element of array


let newArr = pracNum.map((element) => { // makes a new array
    return element * element;
});


for(let el of newArr) {
    console.log(el);
}

console.log("\n");

let newArr2 = newArr.filter((element) => { // use to filter out values and store in a new array
    return element % 2 === 0;
});


for(let el of newArr2) {
    console.log(el);
}

console.log("\n");


let sum2 = newArr.reduce((accumulator, currentVal) => {

    return accumulator + currentVal;
});

// works on all elements of an array and returns a single value
// description: accumulator has the value of arr[0] and currentVal has the value of arr[1], as function starts currentVal keeps on updating, getting every nex element of array and adding it into the accumulator


console.log(sum2, "\n");


let largest = newArr.reduce((max, curr) => {
    if(curr > max) {
        max = curr;
    }
    return max;
});


console.log(largest, "\n");



// practice 03

let marks = [88, 37, 99, 91, 72, 83, 51, 67, 95];

let filteredArr = marks.filter((element) => {
    return element > 90;
});

for(let el of filteredArr) {
    console.log(el);
}

console.log("\n");

let temp3 = [];
let n = prompt("Enter a number: ");
for(let i = 1; i <= n; i++) {
    temp3.push(i);
}

console.log(temp3, "\n");

let sum3 = temp3.reduce((sum, curr) => {
    return sum + curr;
})

console.log(sum3, "\n");


let product = temp3.reduce((prod, curr) => {
    return prod * curr;
})

console.log(product, "\n");