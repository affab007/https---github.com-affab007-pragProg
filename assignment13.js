 Age = parseInt(prompt("What i your current year?","Please enter a number"))
 AgeRetire = parseInt(prompt("At what age would you like to retire?","Please enter a number"))
 CurrentYear = new Date().getFullYear()
 
console.log("What i your current year? ",Age,"\n", 
"At what age would you like to retire? ",AgeRetire,"\n",
"You have ",(AgeRetire - Age),"year left until you can retire.","\n",
"It's ",CurrentYear," so you can retire in",(AgeRetire - Age + CurrentYear),".")