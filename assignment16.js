paint = 350
lotrif2 = parseInt(prompt("What is the length of the room in feet?","Please enter a length"));
wotrif2 = parseInt(prompt("What is the width of the room in feet?","Please enter a width"));

console.log ("You will need to purchase ",Math.ceil((lotrif2*wotrif2)/paint)," gallons of paint to cover ",(lotrif2*wotrif2)," square feet.");
