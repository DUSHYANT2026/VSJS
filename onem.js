// DAY 1:


// var temp= 34785;                                              console.log((temp));        console.log(typeof(temp)); 
// let temp1 = "king of kings";                                  console.log(temp1);         console.log(typeof(temp1)); 
// const temp2 = true;                                           console.log(temp2);         console.log(typeof(temp2)); 
// let nums = [1,32,4, "wrestle chatter"];                       console.log(nums);          console.log(typeof(nums)); 
// let obj = { 1 : "Jon-Jones" , 2: "Alex-Pereira"};             console.log(obj);           console.log(typeof(obj));  
// let temp4 = "all about the programming";                      console.log((temp4));       console.log(typeof(temp4)); 
// temp4 = 3487659342;                                           console.log((temp4));       console.log(typeof(temp4)); 

// const temp5 = 498590425;                                      console.log((temp5));       console.log(typeof(temp5)); 

// // temp5 = false;                                             console.log((temp5));       console.log(typeof(temp5));      // this didn't give any output on the console beacuse of const is immutable 

// nums.forEach( (it) => {
//     console.log(it);
// })
// let index = nums.indexOf("wrestle chatter");                 console.log(index);






// DAY 2:


// let x = 10 ;  let y = 20;

// let temp1 = x+y;                    console.log(temp1);
// let temp2 = x-y;                    console.log(temp2);
// let temp3 = x*y;                    console.log(temp3);
// let temp4 = x/y;                    console.log(temp4);
// let temp5 = x%y;                    console.log(temp5); 

// console.log("\n");

// const temp11 = y+x;                 console.log(temp11);
// const temp12 = y-x;                 console.log(temp12);
// const temp13 = y*x;                 console.log(temp13);
// const temp14 = y/x;                 console.log(temp14);
// const temp15 = y%x;                 console.log(temp15); 

// console.log("\n");

// let nums = [10,20,40,50,60]
// let sum = 0;
// let sub = 180;
// for(let it of nums){
//     sum += it;
//     sub -= it;
//     console.log(sum);
//     console.log(sub);
// }
// console.log("\n");
// console.log(sum);
// console.log(sub);


// console.log('\n')

// if(x > y){
//     console.log("THE VALUE OF X IS GREATER THAN THE VALUE OF Y " + x);
// }else{
//     console.log("THE VALUE OF Y IS GREATER THAN THE VALUE OF X " + y);
// }


// if(x == y){
//     console.log("TRUE");
// }else{
//     console.log("false");
// }


// const check = true;  let num  = 1;
// if(check == num){                     // ONLY CHECK THE VALUE NOT DATA TYPE SO, ALL NON ZERO VALUE IS TRUE SO THAY BOTH GIVE SAME VALUES
//     console.log('True');
// }
// else{
//     console.log('False')
// }

// if(check === num){                    //  === ALSO CHECK THE DATA TYPE WITH THE VALUE;
//     console.log('True');
// }
// else{
//     console.log('False')
// }


// let x1 = true; let x2 = false;
// if(x1 || x2) console.log('TRUE ' + "IN THIS OPERATER ( || ) MAY BE BOTH THE VALUE TRUE OR MAY BE ONE OF THEM TRUE ");
// else console.log( 'FALSE '+ "IN THIS CASE BOTH THE VALUES FALSE");

// if(x1 && x2) console.log('TRUE ' + "IN THIS OPERATOR ( && ) BOTH THE VALUE SHOULD BE TRUE" );
// else console.log('FALSE');

// (x1 == x2) ? console.log("BOTH HAVE SAME VALUES") : console.log("BOTH HAVE DIFFERENT VALUES")  

// let number  = -5;
// (number > 0) ? console.log("THE NUMBER IS POSITIVE") : (number < 0) ? console.log("THE NUMBER IS NEGATIVE") : console.log("ZERO");     // this is ternary operator we can check many condition like this




// DAY 3:

// let num = 100;
// if(num > 0){
//     console.log("THE NUMBER IS POSITIVE");
// }else if(num == 0){
//     console.log("THE NUMBER IS ZERO");
// }else{
//     console.log("THE NUMBER IS NEGATIVE");
// }


// let age = 10;
// if(age >= 18) console.log("ELIGIBAL TO VOTE");
// else console.log("NOT ELIGIBAL TO VOTE");



// let a = 700 ; let b = 100; let c = 1000;
// if(a > b){
//     if(a > c){
//         console.log("A IS GREATER");
//     }else{
//         console.log("C IS GREATER");
//     }
// }else if(b > c){
//     if(b > a){
//         console.log("B IS GREATER");
//     }else{
//         console.log("A IS GREATER");
//     }
// }else{
//     console.log("C IS GREATER");
// }


// let day = 5;
// switch(day){
//     case 1:
//         console.log("MONDAY")
//         break;
//     case 2:
//         console.log("TUESDAY")
//         break;
//     case 3:
//         console.log("WEBNESDY")
//         break;
//     case 4:
//         console.log("THURSDAY")
//         break;
//     case 5:
//         console.log("FRIDAY")
//         break;
//     case 6:
//         console.log("SATURDAY")
//         break;
//     case 7:
//         console.log("SUNDAY")
//         break;
//     default:
//         console.log("ENTER THE VALID NUMBER")
// }


// let grade;
// let score = 100;
// switch (true) {
//     case (score >= 90):
//         grade = 'A';
//         break;
//     case (score >= 80):
//         grade = 'B';
//         break;
//     case (score >= 70):
//         grade = 'C';
//         break;
//     case (score >= 60):
//         grade = 'D';
//         break;
//     case (score >= 50):
//         grade = 'E';
//         break;
//     default:
//         grade = 'F';
// }
// console.log(grade);


// let nums = 0;
// (nums%2 == 0 && nums > 0) ? console.log("EVEN NUMBER") : (nums%2 != 0 && nums>0) ? console.log("ODD NUMBER") : console.log("ZERO");


// let year = 2016;
// ((year % 4  == 0 && year % 100 != 0) || year % 400 == 0) ? console.log("LEAP YEAR") : console.log("NOT A LEAP YEAR");




// DAY 4: LOOPS

// let temp = 10;
// for(let i=1; i <= 10; i++){
//     console.log(i);
// }

// console.log('\n');

// let table = 79;
// for(let i=1; i<=10; i++){
//     console.log(table+' * '+i +' = '+table*i)
// }


// let sum = 0;
// let i = 1;
// while( i <= 10){
//     sum += i;
//     i++;
// }
// console.log(sum);



// let j = 10;
// while( j > 0){
//     console.log(j);
//     j--;
// }


// let k = 1;
// do{
//     console.log(k)
//     k++;
// }while(k <= 5)



// let fact = 1;
// let num = 5;
// let l = 1;
// do{
//     fact *= l;
//     l++;
// }while(l <= num)
// console.log(fact);


// for(let i=1; i<= 10; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(' * ');           // help to write in the same line
//     }
//     console.log()
// }

// for(let i=0; i<=10; i++){
//     if(i == 5) continue;
//     console.log(i);
// }

// for(let i=0; i<=10; i++){
//     if(i == 7) break;
//     console.log(i);
// }



// DAY 5: FUNCTION

function check(num){
    let temp = "";
    if(num%2 == 0){
        temp = "EVEN NUMBER"
    }
    else{
        temp = "odd number"
    }
    return temp;
}
let temp = check(4)            //  create reference and stored into a variable
console.log(temp);            // print the stored variable


function check2(num) {
    let ans = 0;
    ans = Math.floor(num * num);
    return ans;
}console.log(check2(5));

let ans = Number.MIN_VALUE;
function check3(x , y){
    ans = Math.min(x,y);
    return ans;
}console.log(check3(40,2000));


let ans1 = Infinity;
function check4(x , y){
    ans1 = Math.max(x,y);
    return ans1;
}console.log(check4(242,2032990357));

function stringadd(x,y){
    let temp = "";
    temp = x + y;
    return temp;
}console.log(stringadd("king of ","kings"));

const sum = ((x,y) => {
    return x+y;
})(10,30);
console.log(sum);

let checkstring = ( (s) => {
    for(let i=0; i<s.length; i++){
        if(s[i] == '*') return true;
    }
    return false;
})("king of * kings");

console.log(checkstring);