"use stict"

let age=70;
let year = Date.now-age;
if(age>30){
    console.log("You are not eligible. You may join other programs");
    
}
 else if(age>=18&&age<30){
    console.log("You are eligible. Start your application.");
}
else if(age<18){
    console.log("You may join the kids' program.");
    
}
if(age>=60){
    console.log("You may join the seniors’ program");
    
}

function switchCase(str) {
    let switchedStr = '';
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // Check if character is uppercase, switch to lowercase and vice versa
        if (char === char.toUpperCase()) {
            switchedStr += char.toLowerCase();
        } else {
            switchedStr += char.toUpperCase();
        }
    }
    
    return switchedStr;
}

// Example usage:
let inputStr = "OrAnGe";
let result = switchCase(inputStr);
console.log(result); // Output: "oRaNgE"
