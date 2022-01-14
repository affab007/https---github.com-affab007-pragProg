function calcMonthsUntilPaidOff(localBalance,localAPR,localMonthlyPayment){

   localMonths =  -(1/30)*(log*(1+localBalance/localMonthlyPayment(1-(1+(localAPR/365))*30)))/log*(1+(localAPR/365))
   return localMonths

}
  balance = prompt("what is your balance?")
  APR = prompt("what is the APR on the card (as a percent)?")
  monthlyPayment = prompt("what is the monthly payment you can make?")

months = calcMonthsUntilPaidOff(balance,APR,monthlyPayment)

console.log ("what is your balance?",balance,"\n",
            "what is the APR on the card (as a percent)?",APR,"\n",
            "what is the monthly payment you can make?",monthlyPayment,"\n",
            "it will take you",months,"months to pay off this card")