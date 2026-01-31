
//sum of odd numbers
let sum = 0;
for(let i = 91; i <= 129; i++){
  if(i % 2 !== 0){
    sum = sum + i;
  }
}
console.log("Sum of all the odd numbers from 91 to 129", sum);


//sum of even numbers
let total = 0;
for(let i = 51; i <= 85; i++){
  if(i % 2 === 0){
    total = total + i;
  }
}
console.log("Total of all the odd numbers from 51 to 85", total);