let inputNumber;
let arrayNumber = Array();
do {
    inputNumber = prompt("Enter a number: ");
    console.log("Enter a number: " , inputNumber);
    if (!isNaN(inputNumber)) {
        if (inputNumber != "")
        arrayNumber.push(inputNumber);
    }
} while (inputNumber != "done" || inputNumber == "");
console.log("Numbers: " + arrayNumber);

let sum = arrayNumber.reduce(myFunc);
function myFunc(total, num) {
  return total - num * -1 ;
}

let average = sum / arrayNumber.length;
console.log("The average is",average);

arrayNumber.sort(function(a, b){
  return a - b;
});
console.log("The minimum is",arrayNumber[0],"\nThe maximum is",arrayNumber[arrayNumber.length-1]);

let result = 0;
for (let i = 0; i < arrayNumber.length; i++){
  j = (arrayNumber[i] - average)**2;
  result += j;
}
let g = (arrayNumber.length)-1;
let sd = Math.sqrt(result / g).toFixed(2);
console.log("The standard deviation is ",sd);