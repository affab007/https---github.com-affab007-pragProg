principal1 =  parseInt(prompt("Enter the principal","Please enter a number"))
rateOfInterest1 =  (prompt("Enter the rate of interest","Please enter a number"))
numberOfYears1 =  parseInt(prompt("Enter the number of years","Please enter a number"))
notcipy = parseInt(prompt("Enter the times compound interest per year","Please enter a number"))

console.log("Enter the principal: ",principal1,"\n", 
"Enter the rate of interest: ",rateOfInterest1,"\n",
"Enter the number of years: ",numberOfYears1,"\n",
"After 4 years at ",rateOfInterest1,"%,","the investment will be worth ฿",Math.ceil(principal+(((principal/100)*rateOfInterest)/notcipy)*(notcipy*numberOfYears1)),".")