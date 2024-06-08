// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==




// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);




// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");           // check both the conditions should be true
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");               // one of the conditon should be true
// }





// ++++++++++++++ switch case +++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }




// ++++++++++++++++ Truthy and falsey values ++++++++++++++++++++

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {              //  check that array is empty or not
//     console.log("Array is empty");
// }


const emptyObj = {}                            // converted object in to array
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);
 

// Terniary Operator                      // reduce the condtion or compact view of if - else
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


