let id;
id = prompt("what is your id")
let passWord;
passWord = prompt("What is the password?");
console.log("What is the password?"+passWord);
let confirmPassWord;
confirmPassWord = prompt("Confirm Password");

if(confirmPassWord==passWord){
    console.log("ยินดีต้อนรับ!")
}else{
    console.log("ฉันไม่รู้จักคุณ.")
}