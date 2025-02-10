// Block of code that performs specific task,can be invoked whenever needed

// console.log("hello!");
// "abc".toUpperCase();

// -> Non Parameterized function 
function myFunction(){
    console.log("withoutParameter");
}
myFunction();

//-> Parameterized function
function myfunction(msg){
    console.log(msg);
}

// myfunction('I love India');


function add(a,b){
    return a+b;
}
// console.log(add(3,4));

function multi(a , b){
    // local variable -> a,b of function and block scope only
    s = a*b;
    return s;
    console.log("After return statement");
}
// console.log(multi(3,4));

/*===========================================Arrow Function==============================================*/ 


// Arrow Function               
let sum =(a ,b) =>   {
    return a**b;
}
// console.log(sum(3,4));

multiply = (a ,b) => {
    return a*b;
}
// console.log(multiply(5,6));

printHello = () =>{
    console.log("Hello Khurram");
}
// printHello();



/*==================================Count the Vowels==================================*/
function findVowels(msg){
    let count = 0;
    for(const ch of msg){
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            count++;
        }
    }
    return count;
}
// console.log(findVowels("apnacollege"));


countVowels = (msg) =>{
    let count = 0;
    for(const ch of msg){
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("aabbccee"));

/*============================   Foreach loop ======================================= */ 


// here it is a function to execute for each element in the array

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// let str = ["apple","pappaya","banana"];  //higher order funtion
// str.forEach((va,idx,str) =>{
//     console.log(va.toUpperCase() ,idx, str);
// })

// let arr =[2,3,4,5];

// arr.forEach((arr)=>{
//     console.log(arr*arr);
// })
/* =============================== Map Method =========================*/
// Map method to much similar to forEach method but create a new array

let nums =[43,54,56];

// nums.map((nums)=>{
//     console.log(nums);
// })

// new array

// let newArray = nums.map((val)=>{
//     return val*val;
// })
// console.log(newArray);


/*====================== filter Method ========================================== */

// let arr = [1,2,3,4,5,6];

// let evenArray = arr.filter((arr) =>{
//     return arr%2 === 0;
// })

// console.log(evenArray);


/*=============================Reduce Method ======================================= */

// let arr= [1,2,3,4,5,6];
// const count = arr.reduce((result ,current) =>{
//     return result+current;
// })
// console.log(count);

//find the largest number

// const largest = arr.reduce((prev,curr)=>{  
//     return prev>curr?prev:curr;
// })
// console.log(largest);


// let marks = [43,76,85,46,96,92,90,65];
// const num = marks.filter((curr)=>{
//     return curr>90;
// })
// console.log(num);


let n = prompt("Enter a Number : ");

let number=[]; 
for(let i=1;i<=n;i++){
    number[i-1] = i;
}
console.log(number);

// let sumM = number.reduce((prev ,curr) =>{
//     return prev+curr;
// })
// console.log(sumM);

let factorial =number.reduce((result ,curr) =>{
    return result*curr;
})
console.log(factorial);