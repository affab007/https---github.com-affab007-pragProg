let Name
Name = prompt("what is your name")
let surName
surName = prompt("what is your surname")
let gender
gender = prompt("are you male(M,m) or female(F,f)")
let M;
let m;
let F;
let f;

surName = surName[0].toUpperCase()+surName.substring(1)
Name = Name[0].toUpperCase()+Name.substring(1)

if (gender == "M" || gender == "m") {
    console.log ("My name is Mr.",Name,surName)
}else if (gender == "F" || gender == "f") {
    console.log ("My name is Ms.",Name,surName)
}else{
    window.alert("Please enter your gender(F,f,M,m) again.");
     location.reload();
}