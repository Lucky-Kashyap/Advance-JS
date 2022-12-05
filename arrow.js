// Arrow function

// let add = (num1,num2)=>{
//     return num1 + num2;
// }


// console.log(add(8,8));


// let area = radius => 3.14 * radius * radius;


// console.log(area(12));


let isPlaindrome = num =>{
    let originalNum = num;

    let rev = 0;

    while(num !=0){
        rev = rev * 10 + num%10;
        num = parseInt(num/10);
    }
    return originalNum == rev;
}

console.log(isPlaindrome(121));
console.log(isPlaindrome(122));

