let orderAmount;
orderAmount = Number(prompt("What is the order amount?"));
let total;
let state;
let country;
let tax;

if (orderAmount) {
    state = prompt("what state do you live in?");
    if (state == "Illinois") {
        tax = ((orderAmount * 8) / 100);
        total = orderAmount + ((orderAmount * 8) / 100);
        console.log("What is the order amount?", orderAmount, "\n"
            , "What state do you live in?", state, "\n",
            "The tax is $", tax, "\n",
            "The total is $", total);
    } else if (state == "Wisconsin") {
        country = prompt("What country do you live in?");
        if (country == "Eau") {
            tax = ((orderAmount * 6) / 100);
            total = orderAmount + ((orderAmount * 6) / 100);
            console.log("What is the order amount?", orderAmount, "\n",
                "What state do you live in?", state, "\n",
                "What country do you live in?", country, "\n",
                "The tax is $", tax, "\n"
                , "The total is $", total);
        } else if (country == "Dunn") {
            tax = ((orderAmount * 5.9) / 100);
            total = orderAmount + ((orderAmount * 5.9) / 100);
            console.log("What is the order amount?", orderAmount, "\n",
                "What state do you live in?", state, "\n",
                "What country do you live in?", country, "\n",
                "The tax is $", tax, "\n",
                "The total is $", total);
        } else {
            tax = ((orderAmount * 5.5) / 100);
            total = orderAmount + ((orderAmount * 5.5) / 100);
            console.log("What is the order amount?", orderAmount, "\n",
                "What state do you live in?", state, "\n",
                "What country do you live in?", country, "\n",
                "The tax is $", tax, "\n",
                "The total is $", total);
        }
    } else {
        total = orderAmount
        console.log("What is the order amount?", orderAmount, "\n",
            "What state do you live in?", state, "\n"
            , "The total is $", total);
    }
} else {
    window.alert("Please enter aging.");
    location.reload();
}
