console.log("Hello, World!"); // this is used in print 
console.log("Here, We start!");
console.log(" here we start again bro");


// veriables 

// halfName = "Mad";
// console.log(halfName);
// age = 19;
// console.log(age);
price = 12345.78;
console.log(price);
x = null;
y = undefined;
console.log(x);
console.log(y);

isFollow = true;           // boolean variables 
isFollow = false;
console.log(isFollow);

// assignment operator '='

let halfName = "pen";      // this is declare only once 
halfName = "half";
halfName = "Full";
console.log(halfName);

const age = "18";          // this is cant re-declare 
// age = "19";
console.log(age);


// Data types :

const student = {                   // Objects
    fullName: "Mohan pyare",
    age: 21, 
    cgpa: 8.123,
    isPass: true,
};
console.log(student);

student["name"] = "Pyare mohan";
console.log(student["name"]);


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
let i = 1;
console.log("h * i =", h * i);

let j = 999;               // "/"
let k = 2;
console.log("j / k =", j / k);

// some extra operators are-

let l = 25;                // "% - Modulus, this is showing remainder"
let m = 5;
console.log("l % m =", l % m);

let n = 3;                 // "** - Exponentiation, this is showing power"
let o = 2;
console.log("n ** o =", n ** o);

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
