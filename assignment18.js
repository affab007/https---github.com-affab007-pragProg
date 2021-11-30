eurosAreYouExchanging= parseInt(prompt("How many euros are you exchanging?","Please enter a number"));
exchangeRate= parseInt(prompt("What is the exchange rate?","Please enter a number"));
dollars = (eurosAreYouExchanging * exchangeRate) / 100;

console.log("How many euros are you exchanging?",eurosAreYouExchanging,"\n"
            ,"What is the exchange rate?",exchangeRate,"\n"
            ,eurosAreYouExchanging," euros at an exchange rate of ",exchangeRate," is "
            ,dollars.toFixed(2)," U.S. dollars.")