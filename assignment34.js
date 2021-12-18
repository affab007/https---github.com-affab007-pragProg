function chat() {
    let massage;
    massage = prompt("input massage");
    if (massage.includes("bye")) {
        console.log("Me : ", massage);
        console.log("Bot : ", "Ok good bye");
    } else if (massage.includes("ชื่อ")) {
        console.log("Me : ", massage);
        console.log("Bot : ", "สมปอง");
        chat()
    } else if (massage.includes("อายุ")) {
        console.log("Me : ", massage);
        console.log("Bot : ", "26 ครับ");
        chat()
    } else if (massage.includes("ทำอะไร")) {
        console.log("Me : ", massage);
        console.log("Bot : ", "เล่นเกมส์ครับผม");
        chat()
    } else {
        console.log("Me : ", massage);
        console.log("Bot : ", massage);
        chat()
    }
}
chat()