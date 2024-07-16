// const account =478529835                     // const variabel never changes
// let emailid = "kingofkings@gmail.com"       // this can be updated 
// var anothervarible = "459857"              //  this is old syntax (problem with scope donot use)
// accountcity = "delhi"                     // another  way to define variable


// emailid = " dushyantpanditking of kings@gmail.com"

//  console.log(account)                                            // use to provide output
// console.table([account,emailid,anothervarible,accountcity])    // provide  tabular form of output







//  "use strict"                  // use to new verison of nodejs (avoide older version of js)
//  alert("king of kings")        // this us in doucument or html file 


// primitive data type use in js 
// number  (bigint)   , string   , boolean , null  , undefined , symbol(unique)

// console.log(typeof " king of kings")           //this typeof provide the type of varibale that we usees
// console.log(typeof null)                      // the type of null is object
// console.log(typeof undefined)                // typeof undefined is same as the name






// EXAMPLE FOR THIS CONVERSTION of data type : 



// let mark = '4587465'
// console.log(typeof mark)

// let newmark = Number(mark)            //this changes the variable into number type, also use for another datatype
// console.log(typeof newmark)
// console.log(newmark)                 // if something like string abc can't converted into number if gives NaN (NOT A NUMBER)


// let mark = 7
// let newmark = Boolean(mark)       // in boolean every thing is ture until (0, empty string ("") , null) give false
// console.log(typeof newmark)
// console.log(newmark)






//   operations : 

// let value = 3
// let newValue = -value      // changes to negative number
// console.log(newValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


// let str1 = "Dushyant"
// let str2 = " king of kings"
// console.log(str1 + str2);


// js is Loosely type(read the code left ot right ( if first there is number the add after add string)) and dynamically type(defined data type is not important) 
// console.log("324" + 384 + 123)          // left to right (at furst there is string so it convert it to full string)
// console.log(123 + 384 + "324")         // now at first ther is number of first two number added and than concatanate string


// let count = 10
// console.log(count++)               // at first count is printed (10) and then update to (11)
// console.log(++count)              // at first is count(11 is upadate to 12 than ) it printed
// console.log(count++)             // at first is count (12) printed than update to count(13) 
// console.log(count)              // at first is count(13)






// comparision data type

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

 
// console.log("2" > 1);                     //  avoid to compare different data type because sometime it not provude the desire output
// console.log("02" > 1);

// console.log(null > 0);                 //  euality check (==) working is different than comparision (> , < , >= , <= )
// console.log(null == 0);               //   so it provides wrong out put avoid compare different data type
// console.log(null >= 0);

// console.log(undefined == 0);        // undfined always gives false
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log("2" === 2);          // strictly check ( === ) also check the data type and value  (in this case it gives false differ data type)







// primitive data type and non primitive data type (Reference) are the arrays, objects ,Functions




// const id = Symbol('100')
// const anotherid = Symbol('100')

// console.log(id === anotherid)    // BOTH AR DIIFERENT (IF THE VALUE IS SAME BUT SYMBOLE MAKE IT DIIFERENT)
// console.log(typeof anotherId);

// let bignumber = 76245846598427563323223389n     // this represn another data type bigint
// console.log(typeof bignumber)







// Array, Objects, Functions

// const nums = ["the game" , " the rock " , " the undertaker"]
// for(let i=0;i<nums.length;i++){
// console.table(nums[i])
// }

// let mynums = {
//     name: "undertaker",b
//     age: 60,
//     work: "wrestling superstar",
// }
// console.table([mynums.name , mynums.age , mynums.work])

// const myFunction = function(){
//     console.log("Hello world");
// }
// myFunction();







// Memory in javascript
// stack(Primitive data)(in stack there is copy in memory and change easily also the previous will not change) 
// heap (non primitive || reference (array , function, object)) (they use heap memory and have the reference if we update any thing both will changes)


// let x = 99;
// let y = x
// y = 199;
// console.log(x)    // in this case primitve data tpye and use stack memory (changes is copy data not original)
// console.log(y)



// let nums = {
// name: "dushyant",
// height: "183cm",
// networth: 348764123473816,
// }
// let newnums = nums;

// newnums.height = "191cm"
// newnums.networht = 574578326587245;

// console.table([nums.name , nums.height , nums.networht])                   // this is non primitive data type and heap is used (reference changes in orginal data)
// console.table([newnums.name , newnums.height , newnums.networht])







//// +++++++++++++ String and some operation in string+++++++++++++++++++++++++++++



// console.log("dushyant" + " king of kings " + 13)        //  use to concatnate the string directly

// let name = "DUSHYANT SHARMA"
// let day = 13
// console.log(`My name is ${name} and my day of birth is ${day}`)


// const s = "dushyant"
// const news = new String("Dushyant King")                  // there are two type to declare the string in js 


// console.log(news.__proto__);
// console.log(s.charAt(4))
// console.log(news.length)               // space also count in the string size
// console.log(s.length);
// console.log(news.toUpperCase());
// console.log(news.toLowerCase());
// console.log(news.indexOf('t'));


// const newString = news.substring(0, 7)
// console.log(newString)

// const anotherString = s.slice(-5, 4)
// console.log(anotherString)

// const newstring = "       dushyant-king-of-kings "
// console.log(newstring);
// console.log(newstring.trim());           // use to remove the space from the string

// const url = "https://dushyantcom/dushyant%20sharma"

// console.log(url.replace('%20', '-'))         //  use to replace       

// console.log(url.includes('sundar'))          // to check that string/any present or not

// console.log(newstring.split('-'));           // string split into to array on the basis to enter thing







// +++++++++++++ Number +++++++++++++++++++++++++++++

// const num = 300
// console.log(num)
// const newnum = new Number(100)                         //  another way to descibe the number
// console.log(newnum) 

// const other = newnum.toString();                     // convert a num to string and able to use all the string properties on the number
// console.log(other.length)

// console.log(num.toFixed(1));                        //  fix the number of digit after the .

// const x = 123.8966
// console.log(x.toPrecision(4));                       // fixt the total number of digits in the num


// const hundreds = 1000000         
// console.log(hundreds.toLocaleString('en-IN'));     // help to put comas on the number   // ALSO WE CAN USE MAX_VALUE AND MIN_VALUE FUNC IN JS 






// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));          // next greater value of the given number 
// console.log(Math.floor(4.9));         // just lower value of the given number
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 99, 8));


// console.log(Math.random());     // always give number between 0 to 1  (always give differ output)
// console.log((Math.random()*10) + 1);    // to avoid the case of 0 we use the puls one 


// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // now the range 10 to 20 , every time we got differ output


// +++++++++++++ Dates +++++++++++++++++++++++++++++


// const date = new Date();
// console.log(date)
// console.log(date.toString())

// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);


// const newdate = new Date(2024, 0, 23)          // these all are the different way to write the date
// let newdate = new Date(2024, 0, 23, 5, 3)
// let newdate = new Date("2024-01-14")
// let newdate = new Date("01-14-2024")
// console.log(newdate.toLocaleString());


// let newtime= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let time = new Date()
// console.log(time);
// console.log(time.getMonth() + 1);
// console.log(time.getDay());






// console.log("king of kings")


// const x = (n1 , n2) => {         // example of arrow function with the return
//     return n1+n2;
// }
// console.log(x(7,7))



// console.log("king of kings")          // display in the console
// document.write("king of kings")       // display on the web