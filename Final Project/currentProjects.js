//cursor
const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped(){
        cursor.style.display = "none";
    }
    // clearTimeout(timeout);
    // timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

//Navigation
let toggleMenu = document.querySelector('.toggleMenu');
let navigation = document.querySelector('.navigation');
toggleMenu.onclick = function(){
    navigation.classList.toggle('active');
}

//User Input
function myFunction(){
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = "Thank You for your feedback!"
}