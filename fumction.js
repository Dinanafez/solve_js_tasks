let fruits6=["banana","orange","apple","mango"];
let f=fruits6.slice(0,2);
console.log(f);
function std(name1,age,major){
    this.name1=name1;
    this.age=age;
    this.major=major;
}
let omar= new std("omar",22,"SW")
function dina_info(fmane,lastname,age ,birth,ff1,ff2,ff3,fm1,fm2,fm3,fm4,fm5){
this.fmane=fmane;
this.lastname=lastname;
this.birth=birth;
this.age=age;
this.ff1=ff1;
this.ff2=ff2;
this.ff3=ff3;
this.fm1=fm1;
this.fm2=fm2;
this.fm3=fm3;
this.fm4=fm4;
this.fm5=fm5;

}
// Example:
//  Input: [1, 2, 3], [4, 5, 6];
//  Output: [1, 2, 3, 4, 5, 6] 
let arr1=[1, 2, 3];
let arr2=[4, 5, 6];
console.log(arr1.concat(arr2));
// Use the slice() method to extract a portion of an array.
// Example:
//  Input: [1, 2, 3, 4, 5, 6], 2, 4;
//  Output: [1, 2, 5, 6] 
let arr3= [1, 2, 3, 4, 5, 6];
console.log(arr3.slice(2,4));


