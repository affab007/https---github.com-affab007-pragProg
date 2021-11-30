priceOfItem = parseInt(prompt("Enter the price of item 1:","Please enter a number"));
quantityOfItem = parseInt(prompt("Enter the quantity of item 1:","Please enter a number"));
priceOfItem2 = parseInt(prompt("Enter the price of item 2:","Please enter a number"));
quantityOfItem2 = parseInt(prompt("Enter the quantity of item 2:","Please enter a number"));
priceOfItem3 = parseInt(prompt("Enter the price of item 3:","Please enter a number"));
quantityOfItem3 = parseInt(prompt("Enter the quantity of item 3:","Please enter a number"));

supTotal = (priceOfItem*quantityOfItem)+(priceOfItem2*quantityOfItem2)+(priceOfItem3*quantityOfItem3);
tax = (supTotal*5.5)/100;
Total = supTotal+tax;

console.log("Enter the price of item 1: ",priceOfItem,"\n"
,"Enter the quantity of item 1: ",quantityOfItem,"\n"
,"Enter the price of item 2: ",priceOfItem2,"\n"
,"Enter the quantity of item 2: ",quantityOfItem2,"\n"
,"Enter the price of item 3: ",priceOfItem3,"\n"
,"Enter the quantity of item 3: ",quantityOfItem3,"\n"
,"Subtotal: ฿",supTotal,"\n"
,"Tax: ฿",tax,"\n"
,"Total: ฿",Total,"\n")