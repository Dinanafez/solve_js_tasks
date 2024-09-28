"use strict"
// Data type and opeaters 
// 01-cash flow ratio
var cash=1000;
var current=500;
console.log(cash / current);// output 2
//02- net icome
var rev=1000;
var exp=500;
console.log(rev - exp);//output =500
//03-total assetes
console.log(rev + exp);
//04-Net income using profit margin and sales)  
console.log(rev * exp);//out 50000
//05- Average   
let n1=7;
let n2=9;
let n3=2;
let avg=(n1 + n2 +n3)/3;
console.log(avg,"avg");//6
//06-discount
let price=150;
let dic=0.30;
console.log(price - (price*dic),"disc");//105
//07-Age limit (older than 18 and less than 30) 
let age=20;
if(age>18 && age<30){
    console.log("ture")
}
//08- Exponential  
let a=1**2;
let b=2**3;
console.log(a,b);
//09- Remainder
let c= 1 % 10;
let d= 2 % 4 ;
console.log(c,d); 
//10-  Find the output for these expressions and justify the output according to JavaScript interpretation
console.log(typeof(100));//number
console.log(typeof(73.9));//number
console.log(typeof(Nan),"nan");//undefinde
console.log(typeof("water"));//string
console.log(typeof(false));//booleaan
console.log(typeof(9 !=11),"not");//boolean
console.log("orange" - "s");//nan
console.log("orange" + " e");// orenge e
console.log("4" - "8");//-4
console.log("4" + "8");//48
console.log("name" - "3" ,"-3");//nan
console.log("name" + "3" ,"+3");// name +3
console.log( 82 * "word");//nan
console.log( 1 + "hello");//1hello
console.log("hello" +1 );//hello1
console.log( 1 + true);//2 1+1
console.log("hello" + true );//hellotrue
console.log(typeof(Infinity));//numbner
console.log( 1 == '1');//true
console.log( 1 === '1');//false
//String
var str ="Welcome to Orange";

//01-Output: WELCOME TO ORANGE 
// str=str.toUpperCase();
// console.log(str);
//02-Output:  TO 
//03-Output: Hello from Orange  
// str=str.replace("Welcome","HEllo");
console.log(str.replace("Welcome","HEllo"));
//04- Output: welcome to orange 
str=str.toLowerCase();
 console.log(str.toLowerCase());
 //05-Output: 17 
 console.log(str.length);
 //06-Output: Welcome to “Orange”  
 console.log(str);
 //07- Output: Welcome to Orange Jordan 
 // Write the code that replaces all occurrences of the first letter of a string with '*'Sample Input: cactus  Sample Output: ca*tus 
// Array 
var arr=["Coding", "Academy", "By", "Orange"] ;
//01 - Output: [“Coding”, “Academy”, “By”, “Orange”, “Jordan”] 
// arr.push("Jordan");
// console.log(arr);
// arr.pop();
// arr.pop();
// arr.pop();
//console.log(arr);//console.log(arr);
//Output: [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”] 
// arr.splice(1,2,"to");
// console.log(arr);
//03-Output: [“Academy”, “By”, “Orange”]
arr.splice(1,2,"to");
console.log(arr);
let fruits6=["banana","orange","apple","mango"];
console.log(fruits6.unshift("banana"),"unsift")
console.log(fruits6);
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
arr1=arr2.concat(arr3);
console.log(arr1.concat(arr2).concat(arr3))





















