function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()



// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }addTwoNumbers(69,96)



// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);





// function loginUserMessage(username = "DUSHYANT THE KING OF KINGS"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())               //  THE DEAFAULT WE CAN SET EASILY
// console.log(loginUserMessage("roman regins"))
// console.log(loginUserMessage("the game hhh "))


// function calculateCartPrice(...num1){                // add multiple items   // ... also called rest operator and also called spread operator
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))




// const user = {
//     username: "Dushyant ",
//     price: 199999
// }
// function handleObject(anyobject){            // it works like the props in reacts 
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)             //  these are two different ways //  at first declare the objects 

// handleObject({
//     username: "the king of kings",
//     price: 39999999
// })



// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 800, 500, 1000]));







//var c = 300                   // var can't able to differ global and block scope
// let a = 300
// if (true) {
//     let a = 10                     // block or local scope the declare inside {} of condition or function etc
//     const b = 20
//     // console.log("INNER: ", a);
    
// }
// console.log(a);               //  global scope just like global variable in cpp 
// console.log(b);
// console.log(c);




// function one(){
//     const username = "Dushyant "

//     function two(){                               // it is like nested scope just woke like gobal and block
//         const website = "the king of kings"
//         console.log(username);
//         console.log(website);  
//     }
//     // console.log(website);                // it show error can't acces the local outside the function

//      two()

// }
// // one()                // this is the ways to call the functions , also we can provide the argument in it without describe the datatype 





// if (true) {
//     const username = "Dushyant"
//     if (username === "Dushyant") {
//         const website = "  youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);       // it show the error because it accesss outside the scope
// }
// // console.log(username);         // it show the error because it accesss outside the scope


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))             // these are the type to declare the function 
// function addone(num){
//     return num + 1
// }

// console.log(newaddTwo(5))                          // there it show the error because we bind the addtwo with the varibel after that provide the function to the addtwo
// const newaddTwo = function(num){
//     return num + 2
// }



// +++++++++++++++ Arrow function and this keyword +++++++++++++++++++ 


// const user = {
//     username: "Dushyant",
//     price: 9999999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         // console.log(this);
//     } 

// }
// user.welcomeMessage()
// user.username = "NEW Dushyant"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let newname = "Dushyant-sharma"     // this is works only for the objects not for function it will show undefined
//     console.log(this.newname );
// }
// chai()

// const chai = function () {
//     let username = "Dushyant-sharma"
//     console.log(this.username);
// }
// chai()

// const chai =  () => {
//     let username = "Dushyant-sharma"
//     console.log(this.username);
// }
// chai()




// const addTwo = (num1, num2) => {                       // basic arrow function
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2            // implicties type

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => (  num1 + num2  , {username: "Dushyant-sharma"} ) 

// console.log(addTwo(3, 4))


const username = () => (  {username: "Dushyant-sharma"}    );

// console.log(username());  // Output: { username: "Dushyant-sharma" }




// Immediately Invoked Function Expressions (IIFE)

// code not print here but this code is write check online code editor
// ( function king(){
//     console.log("fucntion print the output using  ( function() {}) ()  in first wirte the function then second () use to call function king");
// })();




// ( (name) => {
//     console.log(`we call this function using arrow format of  ( () => {}) ()   ${name}`);
// } )('Dushyant') 




//   +++++++++++++++++++++++++ revision +++++++++++++++++++++++


// function y(){
//     console.log("king of kings fucks")
// }
// y()



// const yy = function alex(num1, num2, num3){
//     return num1 + num2 * num3;
// } 
// console.log(yy(10, 20, 30));



( () => {
    console.log("wwe")
})()