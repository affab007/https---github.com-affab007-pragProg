translator1 = 10.763911;
lotrif1 = parseInt(prompt("What is the length of the room in feet?","Please enter a length"));
wotrif1 = parseInt(prompt("What is the width of the room in feet?","Please enter a width"));

TheAreaIs1 = (lotrif1*wotrif1)
calculate1 = ((lotrif1*wotrif1)/translator1)

console.log("What is the length of the room in feet?",lotrif1,"\n",
"What is the length of the room in feet?",wotrif1,"\n",
"You entered dimensions of ",lotrif1," feet by ",wotrif1," feet","\n"
,"The area is ",TheAreaIs," square feet",calculate1.toFixed(3),"square meters");