let inputinputPassword;

function passwordValidator(lInputPassword) {
    if (lInputPassword.length < 8) {
        if (!isNaN(lInputPassword)) {
            return "very weak"
        } else if (lInputPassword.includes("a")||
            lInputPassword.includes("b")|| 
            lInputPassword.includes("c")|| 
            lInputPassword.includes("d")|| 
            lInputPassword.includes("e")|| 
            lInputPassword.includes("f")|| 
            lInputPassword.includes("g")|| 
            lInputPassword.includes("h")|| 
            lInputPassword.includes("i")|| 
            lInputPassword.includes("j")|| 
            lInputPassword.includes("k")|| 
            lInputPassword.includes("l")|| 
            lInputPassword.includes("m")|| 
            lInputPassword.includes("n")|| 
            lInputPassword.includes("o")|| 
            lInputPassword.includes("p")|| 
            lInputPassword.includes("q")|| 
            lInputPassword.includes("r")|| 
            lInputPassword.includes("s")|| 
            lInputPassword.includes("t")|| 
            lInputPassword.includes("u")|| 
            lInputPassword.includes("v")|| 
            lInputPassword.includes("w")|| 
            lInputPassword.includes("x")|| 
            lInputPassword.includes("y")||
            lInputPassword.includes("z")){
                if (((!lInputPassword.includes("1")&&
                !lInputPassword.includes("2")&&
                !lInputPassword.includes("3")&&
                !lInputPassword.includes("4")&&
                !lInputPassword.includes("5")&&
                !lInputPassword.includes("6")&&
                !lInputPassword.includes("7")&&
                !lInputPassword.includes("8")&&
                !lInputPassword.includes("9")&&
                !lInputPassword.includes("0"))&&
                (!lInputPassword.includes("@"))))
                {
                  return "weak"
                }
        }
    }else{
        //lInputPassword contain both numeric and character
        if (/[0-9]/.test(lInputPassword)&&
        /[a-z]/.test(lInputPassword)){
            
        } if (/[!@#$%^&*()-+*/]/.test(lInputPassword)){
        return "very storng"
    }else{
        return "storng"
    }
    }


}

inputPassword = prompt("Enter password :")
chack = passwordValidator(inputPassword)
console.log("The password \'", inputPassword, "\' is a", chack, "password")