pizza = 8 ;
pizza1 = parseInt(prompt("How many people?","Please enter a number"));
pizza2 = parseInt(prompt("How many pizzas do you heve?","Please enter a number"));

console.log("How many people?",pizza1,"\n"
,"How many pizzas do you heve?",pizza2,"\n"
,pizza1," people with ",pizza2,"pizzas","\n"
,"Each person gets ",Math.floor(pizza*pizza2/pizza1)," pieces of pizza.","\n" 
,"there are ",Math.ceil(((pizza*pizza2/pizza1)-(pizza*pizza2/pizza1))*pizza1)," leftover pieces.");