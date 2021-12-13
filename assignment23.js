let age;
age = Number(prompt("what is your age?"))
let canDrive;
canDrive = (age <= 18) ? "คุณอายุไม่ถึงเกณฑ์ที่จะขับรถอย่างถูกกฎหมาย" : "คุณอายุมากพอที่จะขับรถอย่างถูกกฎหมาย";

console.log("What is your age?",age,"\n",
canDrive);