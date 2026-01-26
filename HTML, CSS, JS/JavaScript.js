console.log("Hello, World!"); // this is used in print 
console.log("Here, We start!");
console.log(" here we start again bro");


// Veriables 

// halfName = "Mad";
// console.log(halfName);
// age = 19;
// console.log(age);
price = 12345.78;
console.log(price);
// x = null;
// y = undefined;
// console.log(x);
// console.log(y);

isFollow = true;           // boolean variables 
isFollow = false;
console.log(isFollow);

// assignment operator '='

let halfName = "pen";      // this is declare only once 
halfName = "half";
halfName = "Full";
console.log(halfName);

// const age = "18";          // this is cant re-declare 
// age = "19";
// console.log(age);


// Data types :

// const student = {                   // Objects
//     fullName: "Mohan pyare",
//     age: 21, 
//     cgpa: 8.123,
//     isPass: true,
// };
// console.log(student);

// student["name"] = "Pyare mohan";
// console.log(student["name"]);


const product = {
    Name: "fountain pen",
    rating: 4.2,
    offer: 4,
    price: 432,
};

console.log(product);


const profile = {
    Name: "shradha khapra",
    isFollow: true,
    posts: 195,
    followers: 569,
    following: 4,
    Bio: "Apna collage | Ex- Microsoft, DRDO",
    Motive: "To educate someone is the highest privilage",
};

console.log(profile);
console.log(typeof profile["Name"]); 


// Oprators:-
// Arithmetic Operators:

let a = 13;                // "+"
let b = 8;
console.log("a + b =",a + b);

let c = 99;
let d = 1;
let e = c + d;
console.log("c =", c, "& d =", d);
console.log("c + d =", e );

let f = 10000000000;       // "-"
let g = 1;
console.log("f - g =", f - g);

let h = 99;                // "*"
// let i = 1;
// console.log("h * i =", h * i);

let j = 999;               // "/"
let k = 2;
console.log("j / k =", j / k);

// some extra operators are-

let l = 25;                // "% - Modulus, this is showing remainder"
// let m = 5;
// console.log("l % m =", l % m);

let n = 3;                 // "** - Exponentiation, this is showing power"
// let o = 2;
// console.log("n ** o =", n ** o);

// Unary operators are-

let p = 8;                 // "++ - Increment"
let q = 2;
p++; // post increment
// ++p;  pre increment 
console.log("p = ", p);

let r = 10000;             // "-- - Decrement"
let s = 5;
r--;  // post
// --r; pre 
console.log("r =", r);


// Assignment Operators: 

let t = 15;
let u = 2;

// t += 4;                // "+= - for t = t + 4;"
// t -= 4;                // "-= - for t = t - 4;"
// t *= 4;                // "*= - for t = t * 4;"
// t /= 4;                // "/= - for t = t / 4;"
// t %= 4;                // "%= - for t = t % 4;"
// t **= 4;               // "**= - for t = t ** 4;"

console.log("t = ", t);


// Camparison Operators:

let v = 13; 
let w = 12;

console.log("v == w", v == w);          // "== - check equal to"
console.log("v != w", v != w);          // "!= - check not equal to"
console.log("v === w", v === w);        // "=== - check equal to in data type"
console.log("v !== w", v !== w);        // "!== - check not equal to in data type"
console.log("v > w", v > w);            // "> - check greater than"
console.log("v >= w", v >= w);          // ">= - check greater than equal to"
console.log("v < w", v < w);            // "< - check less than"
console.log("v <= w", v <= w);          // "<= - check less than equal to"


// Logical Operators:

let x = 55;                             // "&& - check both are true"
let y = 89;                             // "|| - check for one true"
                                        // "! - it convert the statement"
let cond1 = x < y;      // False   
let cond2 = x == 55;    // True

console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", x < y || y === 90);
console.log("!(x == 55) = ", !(x == 55));


// Ternary Operators:

let people = 230;                       // Compact if else

let park = people >= 300 ? "Many" : "Some";
console.log(park);


// Conditional Statements:-

// let age = 16;

// if ( age >= 18) {
//     console.log("Ok Ok you can do this");
// }

// if ( age < 18) {
//     console.log("you CANNOT do this dumb kid!!");
// }

// odd or even 
let num = 13;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);


// let number = prompt("enter a number:");

// if (number % 5 === 0) {
//     console.log(number, "is a multiple of 5");
// } else {
//     console.log(number, "is NOT a multiple of 5");
// }


let marks = "85";
let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if(marks >= 70 && marks <= 89) {
    grade = "B";
} else if(marks >= 60 && marks <= 69) {
    grade = "C"; 
} else if(marks >= 50 && marks <= 59) {
    grade = "D";
} else {
    grade = "E";
}
console.log("Your Grade is",grade);


// Loops :-

for (let i = 1; i <= 9; i++) {          // for loop
    console.log("i =", i);
}

let sum = 0;
let m = 9; 
for (let i = 1; i <= m; i++) {
    sum = sum + i;
}
console.log("sum =", sum);


let i = 1;                              // while loop
while (i <= 9) {
    console.log("hello while loop!");
    i++;
}


let o = 6;                              // do while loop 
do {
    console.log("o =", o);
    o++;
} while (o <= 5);


// let str = "Amazon web";                 // for-of loop
//                                         // string and array
// let size = 0;
// for (let i of str) {
//     console.log("i =", i);
//     size++;
// }

// console.log("string lenth =", size);


let student = {
    name: "Rohit Sharma",
    age: 32,
    cgpa: 6.9,
    isPass: true,
};

for (let key in student) {
    console.log("key =", key, "value =", student[key]);
}


for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log("Number =",i);
    }
}


// let gameNum = 21;
// let userNum = prompt("Game number ko socho bhai : ");

// while (userNum != gameNum) {
//     userNum = prompt("Galat socha phir se soch : ");
// }

// console.log("Shabash, ab socha na sahi!");


// Strings :- 

let str = "hello! Jarvis" 
console.log(str[7]);

let info = {
    name: "mad",
    year: 20,
};
let info1 = `Name is ${info.name} and ${info.year} year old.`;
console.log(info1);                 // "``" template literals


// escape characters-

console.log("this is \nuse in move into next line");   // "\n"
console.log("this is \t use for giving tab space");    // "\t"


// string methods-

let str1 = "KisikaCollege";
let newstr = str1.toUpperCase();            // for uppercase
let newstr1 = newstr.toLowerCase();         // for lowercase
console.log(str1);
console.log(newstr);
console.log(newstr1);

let str2 = "        ha  ha   ha        ";   // ".trim"- this for remove extra space
console.log(str2.trim());    

let str3 = "0123456789";
console.log(str3.slice(3,10));        // ".slice"- for select from to 

let str4 = "this is concat use to joint 2 strings";
let jffm = str1.concat(str4);         // ".concat" and "+" are same 
//        Or
let jffm1 = str1 + str4;
let jffm2 = "Yahoo" + 9999;

console.log(jffm, jffm1);
console.log(jffm2);

let jffm3 = "50 laws of Power";       // it use for replace

console.log(jffm3.replace("50", "48"));

let jffm4 = "Money is Boss";          // for showing a character

console.log(jffm4.charAt(9));


// let Name09 = prompt("Enter Your Name");
// let hhhh = "@"+Name09+Name09.length;
// console.log(hhhh);


// Arrays :-

let areare = [99, 98, 97, 87, 84, 48, 84, 83, 83, 84];
console.log(areare);

let array08 = ["cow", "dog", "human", "cat", "lion"]; 
// for (let i = 0; i < array08.length; i++) {           // for loop 
//     console.log(array08[i]);
// }

for (let animal of array08) {           // forof loop
    console.log(animal);                // prefer for array
}


let stumarks = [85, 97, 44, 37, 76, 60];

let sum2 = 0;

for (let stmark of stumarks) {
    sum2 += stmark;
}

let avg1 = sum2 / stumarks.length;
 console.log(`Average marks of student is ${avg1}`);


let price3 = [250, 645, 300, 900, 50];

let i2 = 0;
for (let val of price3) {
    let offer = val / 10;       // for of loop
    price3[i2] -= offer;
    console.log(`value after offer = ${price3[i2]}`);
    i2++;
}

//            OR

for (let i = o; i < price3.length; i++) {
    let offer = price3[i] / 10;     // for loop
    price3[i] -= offer;
}

console.log(price3);


let sleep = [1, 2, 3, 4, 5, 6,];

sleep.push(7, 8, 9, 10);            // push at the end

console.log(sleep); 

let vanishItem = sleep.pop();       // pop - removing last thing in array

let sleep2 = ["good", "bad", "crow", "shift"];

console.log(sleep.toString());      // to-string - array to string
console.log(sleep2.toString());
console.log("vanished", vanishItem);


let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "drstrange"];
let dcHeroes = ["batman", "man of steel"];

let heroes = marvelHeroes.concat(dcHeroes);   // concat - joint many arrays
dcHeroes.unshift("ladygaga");                 // unshift - add in starting
marvelHeroes.shift("");                       // shift - remove from start

console.log(heroes);
console.log(marvelHeroes.slice(1,2));         // slice - cut a piece


let arr2 = [1, 2, 3, 4, 5, 6, 7];

arr2.splice(2, 1, 99, 99);                    // splice - start,select,replace
console.log(arr2);


let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

console.log(companies.shift());
companies.splice(1,1,"ola");
companies.push("amazon");


// Functions :-

function func1 () {
    console.log(13);
}
func1();

function sum3(x, y) {
    s = x + y;
}
 

function sum4(a, b) {
    return a + b;
}
let su = sum4(4, 5);
console.log(su);

// Normal function of sum & multiplication

function sum5(a, b) {
    return a * b;
}
let su2 = sum5(99, 1);
console.log(su2);


const arrowSum = (a, b) => {            // => - arrow function
    return a + b;
}
let su3 = arrowSum(998, 1);
console.log(su3);

// Arrow function of sum & multiplication

const arrowSum1 = (a, b) => {
    return a * b;
}
let su4 = arrowSum1(9999, 1);
console.log(su4);


function vowel(str) {                  // vowel function
    let count = 0;
    for (const char of str) {
         if (
             char === "a" ||
             char === "e" ||
             char === "i" ||
             char === "o" ||
             char === "u"
            ) {
            count++;
         }
    }

    console.log(count,"Vowels");
}
vowel("he there");

//  same function with function ↑ & arrow function ↓

const vowel1 = (str) => {            // Arrow-vowel function
    let count = 0;
    for (const char of str) {
         if (
             char === "a" ||
             char === "e" ||
             char === "i" ||
             char === "o" ||
             char === "u"
            ) {
            count++;
         }
    }

    console.log(count,"Vowels");
}
vowel1("this is arrow function");


let arr = ["jaipur", "udaipur", "kota", "bikaner", "jaisalmer"];

arr.forEach((val, idx, arr) => {             // forEach function- execute for each element
    console.log(val.toUpperCase(), idx);
});

let square = [2, 3, 4, 5, 7];

square.forEach((val,) => {
    console.log(val * val);
});


let nums = [45, 35, 25, 15];

let newArr = nums.map((val) => {        // map - create new array using some return value  
    return val * 2;
});

console.log(newArr);

let calcSquare = (num) => {
    console.log(num * num);
};

/* forEach - is use for normal calculation and printing
value.
 Map - is use when you creating new array, using values. */
 
 
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArr = arr3.filter((val) => {    // filter- create new array if true
    return val % 2 === 0;
    // return val % 2 !== 0;
});

console.log(evenArr);


let arr4 = [11, 12, 13, 14];      // reduce- it returns the single value

const output = arr4.reduce((prev, curr) => {
    return prev + curr;
});

console.log(output);


let arr5 = [34, 99, 93, 65];      

const output1 = arr5.reduce((prev, curr) => {
    return prev > curr ? prev : curr;  // largest no. code
});

console.log(output1);


let largno = [95, 74, 34, 72, 85, 92, 55, 93];

let bookworm = largno.filter((val) => {
    return val > 90; 
});

console.log(bookworm);


// let n1 = prompt("enter a number : ");

// let arr6 = [];

// for(let i = 1; i <= n1; i++) {
//     arr6[i - 1] = i;
// }
 
// console.log(arr6);

// let sum6 = arr6.reduce((res, curr) => {
//     return res + curr;
// });

// console.log("sum = ",sum6);

// let factorial = arr6.reduce((res, curr) => {
//     return res * curr;
// });

// console.log("factorial = ",factorial);


// DOM - Document Object Model :-

