let inputName;
let arrayName = Array();
let x = -1;
do {
    inputName = prompt("Enter a name: ");
    console.log("Enter a name: " + inputName);
    if(inputName.length > 0){
        arrayName.push(inputName);
    }
    x++
} while (inputName != "")
let i = Math.floor(Math.random() * x);
let randomName = arrayName[i];
console.log("The winner is...",randomName);