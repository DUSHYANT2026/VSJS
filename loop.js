//  +++++++++++++++++++++++++ for loop ++++++++++++++++++++++++++++

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
// console.log(element);




for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= i; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
    // process.stdout.write('*');                          //  use process.stdout.write() to print the pattern instead console.log()
   }
//    console.log()
}



// let myxay = ["flash", "batman", "superman"]
// console.log(myxay.length);
// for (let i = 0; i < myxay.length; i++) {
//     console.log( myxay[i]); 
// }


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${i}`)
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${i}`);
// }




//  +++++++++++++++++++++++++ while and do while ++++++++++++++++++++++++++++


// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }

// let nums = ['flash', "batman", "superman"]
// let x = 0
// while (x < nums.length) {
//     console.log(`Value is ${nums[x]}`);
//     x = x + 1
// }


// let score = 100
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);







// +++++++++++++++++ for of loop (for(atuo it : x) in cpp)  here we use (for(const it of x)) ++++++++++++++++

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const it of arr) {
//     console.log(it);
// }

// const greetings = "Hello world!"
// for (const it of greetings) {
//     if(it == ' ') continue;
//     console.log(`Each char is ${it}`)
// }

  


// +++++++++++++++++++++++++ Maps +++++++++++++++++++++++++++++++++==

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// console.log(map);
// console.table(map);                  //  all the methodes iterates in map

// for(const it of map){
//     console.log(it[0] + ' the full name is ' + it[1]);
// } 

// for (const [it, value] of map) {
//     console.log(it +  ' :- ' +  value);
// }


 
// +++++++++++++++ iterates inn objects  using for in function ++++++++++++++++++++++  

// const myObject = {                   // for - of loop doesn't works in objects
//     js: 'javascript',                  // only for - in  loop  works in objects and give index after that with the help of index we can access the value
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const it in myObject) {          
//     console.log(it + '  =  ' + myObject[it]);
    
// }

// for (const it in myObject) {          
//     console.log(`${it} shortcut is for ${myObject[it]}`);
// }


// const nums = ["js", "rb", "py", "java", "cpp"]

// for (const it of nums) {           //  for - of loop gives direct values 
//     console.log(it);
// }
// for (const it in nums) {          //  for - in  loop gives index and with the help of index we can access the values 
//     console.log(it);
// }
// for (const it in nums) {
//     console.log(nums[it]);
// }






// +++++++++++++++++++++++ for-each  function in array +++++++++++++++++

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){                  // for-each function in array and also use the function for iterations   
//     console.log(val);                              
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )





// [{} , {} , {}]    // objects in array

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (it) => {
//     // console.table(it);
//     console.log(it.languageFileName);
// })

  




// +++++++++++++++++++++++ filter function in array +++++++++++++++++

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]               // use filter to apply conditons or filter the array

// const newNums = myNums.filter( (num) => {               //  filter return the values not like for-each  and filter reteuns like an array
//     return num > 4                                      //  if we use {} in function then we have to use reture because { } is the scope
// } )                                                    // don't need to return in ()
// console.log(newNums);




// const x = [];
// const newNums = myNums.forEach( (num) => {               //   for-each didn't return any values like filter (we have to print the values)
//     // return num > 4
//     if(num > 4){
//         console.log(num);                               // there are many way to use the for-each 
//         x.push(num);
//     }
// } )
// console.log(newNums);
// console.table(x);







const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let newbooks = books.filter( (it) => it.genre === 'History')               // these are the two type to get the output 1. wihout {} and there not needs to use return 
let newbooks = books.filter( (it) => { return it.genre === 'History'})
// console.log(newbooks);    
                 

// const b = books.filter( (it) => { 
//     return it.publish >= 1995 && it.genre === "History"
// })
// console.log(b);       
  
  

// +++++++++++++++++++++++ map function in array +++++++++++++++++

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]                       // mapp directly returns and also we can use nestesd and filter

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);



// +++++++++++++++++  accumualtor (reduce function) +++++++++++++++++++++++
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)        //  accumualtor using arrow function              // 0 is the initial value for the accumaltor
// const myTotal = myNums.reduce( (i,it) => {return i + it;} , 0)
// console.log(myTotal);




// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(priceToPay);

console.log("king of kings")
