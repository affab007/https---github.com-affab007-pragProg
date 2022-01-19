let arrayName = ["John Smith", "Jackie Jackson", "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"];
console.log("There are", arrayName.length, "employees:");
for (let i = 0; i < arrayName.length; i++) {
    console.log(arrayName[i]);
}
let inputName = prompt("Enter an employee name to remove?");
console.log("Enter an employee name to remove: " + inputName);
let n = arrayName.indexOf(inputName);
arrayName.splice(n, 1);
console.log("\nThere are", arrayName.length, "employees:");
for (let i = 0; i < arrayName.length; i++) {
    console.log(arrayName[i]);
}