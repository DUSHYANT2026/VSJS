var temp= 34785;                                              console.log((temp));        console.log(typeof(temp)); 
let temp1 = "king of kings";                                  console.log(temp1);         console.log(typeof(temp1)); 
const temp2 = true;                                           console.log(temp2);         console.log(typeof(temp2)); 
let nums = [1,32,4, "wrestle chatter"];                       console.log(nums);          console.log(typeof(nums)); 
let obj = { 1 : "Jon-Jones" , 2: "Alex-Pereira"};             console.log(obj);           console.log(typeof(obj));  
let temp4 = "all about the programming";                      console.log((temp4));       console.log(typeof(temp4)); 
temp4 = 3487659342;                                           console.log((temp4));       console.log(typeof(temp4)); 

const temp5 = 498590425;                                      console.log((temp5));       console.log(typeof(temp5)); 

// temp5 = false;                                        console.log((temp5));       console.log(typeof(temp5));      // this didn't give any output on the console beacuse of const is immutable 

nums.forEach( (it) => {
    console.log(it);
})
let index = nums.indexOf("wrestle chatter");          console.log(index);