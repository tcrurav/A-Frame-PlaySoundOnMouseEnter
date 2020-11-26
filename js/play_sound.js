window.onload = initialize;

function initialize(){
    var myCircle = document.getElementById("my-circle");
    myCircle.addEventListener("mouseenter", playSound);
}

function playSound(){
    console.log("starting to play sound");
    var myCircle = document.getElementById("my-circle");
    myCircle.components.sound.playSound();
}