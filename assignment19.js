principal =  parseInt(prompt("Enter the principal","Please enter a number"))
rateOfInterest =  (prompt("Enter the rate of interest","Please enter a number"))
numberOfYears =  parseInt(prompt("Enter the number of years","Please enter a number"))

console.log("Enter the principal: ",principal,"\n", 
"Enter the rate of interest: ",rateOfInterest,"\n",
"Enter the number of years: ",numberOfYears,"\n",
"After 4 years at ",rateOfInterest,"%,","the investment will be worth ฿",Math.ceil(principal+((principal/100)*rateOfInterest)*numberOfYears),".")