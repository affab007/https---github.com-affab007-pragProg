do{
    minimum = Number(prompt("What's the minimum length?"));
    if(minimum == "" || minimum == NaN){
    alert("Please enter a number.");
    }
}while(minimum == "" || minimum == NaN );
console.log("What's the minimum length? " + minimum);

do{
    special = Number(prompt("How many special characters?"));
    if(special == "" || special == NaN){
    alert("Please enter a number.");
    }
}while(special == "" || special == NaN);
console.log("How many special characters? " + special);

do{
    numbers = Number(prompt("How many numbers?"));
    if(numbers == "" || numbers == NaN){
    alert("Please enter a number.");
    }
}while(numbers == "" || numbers == NaN);
console.log("How many numbers? " + numbers);

let arrayPassword = Array();
let text = "";

let spaC = "~!#@$%^&*()_+*/|?\.[]{}=-%";
for (let i = 0; i < special; i++) {
    text = spaC[Math.floor(Math.random() * spaC.length)];
    arrayPassword.push(text);
}

let numeral = "0123456789";
for (let i = 0; i < numbers; i++) {
    text = numeral[Math.floor(Math.random() * numeral.length)];
    arrayPassword.push(text);
}

let c = Math.floor(Math.random() * 5);
let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let ch = (minimum + c) - (special + numbers);
for (let i = 0; i < ch; i++) {
    text = letter[Math.floor(Math.random() * letter.length)];
    arrayPassword.push(text);
}

let pass = Array();
let randompass = "";
let p = 0;
while (pass.length < arrayPassword.length) {
    p = Math.floor(Math.random() * arrayPassword.length);
    if (pass.indexOf(p) < 0) {
        pass.push(p);
    }
}

for (let i = 0; i < (minimum +c); i++) {
    randompass += (arrayPassword[pass[i]]);
}
console.log("Your password is " + randompass);