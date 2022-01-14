function chat() {
    let massage;
    massage = prompt("input massage");
    if (massage.includes("bye")){
        console.log("Me : ", massage)
        console.log("Bot : ","Ok good bye")
    }else{
        console.log("Me : ", massage);
    console.log("Bot : ", massage);
        chat()
    }
}
chat()