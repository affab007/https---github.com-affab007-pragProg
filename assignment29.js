let fN;
fN = Number(prompt("Enter the first number:"));
let sN;
sN = Number(prompt("Enter the second number:"));
let tN;
tN = Number(prompt("Enter the third number:"));
if (fN, sN, tN) {
     if (fN == sN == tN) {
          if (fN > sN) {
               if (fN > tN) {
                    console.log("The largest number is", fN);
               }else{
                    if (tN > sN) {
                         console.log("The largest number is", tN);
                    }else{
                         console.log("The largest number is", sN);
                    }
               }
          }else{
               if (sN > tN) {
                    console.log("The largest number is", sN);
               }else{
                    if (tN > fN) {
                         console.log("The largest number is", tN);
                    }else{
                         console.log("The largest number is", fN);
                    }
               }
          }
     }else {
          window.alert("Please enter a new number again.");
          location.reload();
     }
}else {
     window.alert("Please enter a new number again.");
     location.reload();
}