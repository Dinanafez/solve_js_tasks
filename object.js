"use strict"
let obj1={
    nameobj:"adam",
    age:25,
    gender:"male"
}
// console.log(obj1);
console.log(Object.values(obj1,"val"));
console.log(Object.entries(obj1));
console.log(Object.assign(obj1));
console.log(Object.seal(obj1));
