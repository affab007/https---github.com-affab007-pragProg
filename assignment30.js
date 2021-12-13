let fN;
fN = prompt("Is the car silent when you turn the key?  y/n");
let sN;
let tN;
let foN;
let fiN;
let siN;
if (fN == "y") {
     sN = prompt("Are the battery terminals corroded? y/n");
     if (sN == "y") {
          console.log("Clean terminals and try starting again.");
     }else{
          console.log("The battery cables may be damaged. Replace cables and try again.");
     }
}else {
     tN = prompt("Dose the car make a clicking noise? y/n");
     if (tN == "y") {
          console.log("Replace the battery.");
     }else {
          foN = prompt("Dose the car crack up but fall to start?  y/n");
          if (foN == "y") {
               console.log("Check spark plug connections.");
          }else {
               fiN = prompt("Dose the engine start and then die?  y/n");
               if (fiN == "y") {
                    siN = prompt("Does your car have fuel injection?  y/n");
                    if (siN == "y") {
                         console.log("Check to ensure the choke is opening and closing.");
                    }else{
                         console.log("Get it in for service.");
                    }
               }
          }
     }
}