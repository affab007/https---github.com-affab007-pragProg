let orderAmount;
orderAmount = parseInt(prompt("What is a oder amount","Please enter the amount"));
let state;
state = prompt("what is the state","Please enter state");
let subTotal;
let tax;
let total;

if (state == "WI"){
    subTotal = "The subtotal is $"+orderAmount;
    tax = "The tax is $"+orderAmount *  (5.5/100);
    total = "The total is $"+(((5.5/100)*orderAmount)+orderAmount);
}
if (state == "MN"){
    total = "The total is $"+orderAmount;
}

console.log("what is a order amount?",orderAmount,"\n",
"what is the state",state,"\n",
subTotal,"\n",
tax,"\n",
total)

