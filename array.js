// we can add different type of variable it still workk not like c++(only specific type declaration)

// const array = [1,2,3,4,4,5,6 , "dushyant" , "king of kings"]
// console.log(array)
// console.table(array)       // write the array in the tablar from   // also we can see the indexing

// console.log(array[3])     // use the access the single element using indexing


// array.push(999)  
// array.push(99)           // push the element in the last index
// array.pop();            // pop the element  from the last index
// console.table(array)





const nums = new Array(7,5,4,3 ,100 , 200 ,300,1000)   // another way to use the array

// nums.unshift(9)           // shift the element from the start and add new element in the start
// nums.shift()
// console.table(nums)       // use to unshift the array from the start

// console.log(nums.includes(9));       // check the element present or not (return true and false)
// console.log(nums.indexOf(3));       // return the element of index that present at 3


// const newnums = nums.join()
// console.table(nums);
// console.table(newnums)


// console.log("A ", nums);           

// const myn1 = nums.slice(1, 3)          //  use to get the element according to the range without changing the original array

// console.log(myn1);
// console.log("B ", nums);


// const myn2 = nums.splice(1, 3)       //  use to get the element according to the range(also includes the last of range) and changing the original array
// console.log("C ", nums);
// console.log(myn2);






// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)             //  push array like single element in the another array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



// for(let i=0;i<dc_heros.length;i++)       // we can use loop to push every element of an array to another array
// marvel_heros.push(dc_heros[i])
// console.log(marvel_heros)



// const allHeros = marvel_heros.concat(dc_heros)           //  use to conact two array (working like loop push evey element of array to new index )
// console.log(allHeros);



// const y = [...marvel_heros, ...dc_heros]          //  another way to add(concat) many array
// console.log(y);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const x = another_array.flat(Infinity)      // convert all nested array into simple array
// console.log(x);




// console.log(Array.isArray("Hitesh"))                 // return true or false
// console.log(Array.from("Hitesh"))                   //  convert string into char array
// console.log(Array.from({name: "hitesh"}))          // interesting  provide the null

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));







//  +++++++++++++++ Objects +++++++++++++++++++++++++++++


// const sym = Symbol("King")

// const obj = {
//     name : "Dushyant",
//     age : 20,
//     // [sym] : "new Kings",
//     nickname : "The King of Kings",
//     location : "gurugram",
//     lastllogin : ["monday" , "sunday"]
// }
// console.table(obj);                                   //  there are many ways to declare the object  using table format
// console.log(obj.name,obj.nickname ,obj.age ,obj.location ,obj.lastllogin[0],obj.lastllogin[1])
// console.log(obj["name"])                            // in this type we have to give the variable in the  string form
// console.log(obj["age"])    
// console.log(obj[sym])                               //  declare the symbole in saqure brakect or refer symbole use []

// obj.name = "the undertaker"        // also we can easily over wte the value 
// Object.freeze(obj)           // after the freez we can't change the value or can't overwrite
// obj.name = "the rock"
// console.table(obj)  


// obj.func = function(){
//     console.log("ALL ABOUT THE OLMPIYA");
// }
// obj.func2 = function(){
//     console.log(`USING BASTIC AND THIS KEYWORD TO ACCESS THE VARIABLES, ${this.name}`);
// }

// console.log(obj.func())
// console.log(obj.func2())






// const newsong = new Object()        // this is the singleton oject declaretion

const newsong = {
    name : "cody theme song",
    songid : "1234kingdoms",
    singername: "wwe theme"
}

// console.log(newsong);   console.table(newsong);

const song = {
    englishsong : "hymn the coldplay",
    wwetheme : {
        hhhtheme : {
            first : "king of kings",
            second : " the game"
        },
        johnchena : {
            first : "the world life",
            second : "tuuu ruuu tuuu tuu ruu tuuu"
        }
    }
}

// console.log(song.wwetheme.johnchena.second)          // by using . we can accces all the nested objects and its variable


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                     // this work same as in array (push) , obj2 were pushed in obj1 like a variable of obj1.
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}                   // best way to add two or many object and array (using spread operator)
// console.log(obj3);




// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]
// users[1].email           // this work like array 


// console.log(newsong);

// console.log(Object.keys(newsong));              //  access all the keys of objects in array structure
// console.log(Object.values(newsong));           //  access all the values of objects in array structure
// console.log(Object.entries(newsong));          //  access all the keys and corresponding values of objects in array structure

// console.log(newsong.hasOwnProperty('isLoggedIn'));  //  check the part of obects or not



// const course = {
//     coursename: "js in hindi",
//     price: "999999",
//     courseInstructor: "Dushyant sharma"
// }

// course.courseInstructor                            // deconstruction of objects same as props in react reduce the complexcity of object

// const {courseInstructor: x} = course

// console.log(courseInstructor);
// console.log(x);
 

// this is the small repesentation of jason (api) it looks like objects but without name and we can convert this to object and get the results
// {
//     "name": "hitesh",                             //  write the string type in columns
//     "coursename": "js in hindi",
//     "price": "free"
// }
 


// array of obects of jason
// [
//     {},
//     {},
//     {}
// ]

