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