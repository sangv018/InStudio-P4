const colours = ["#FFFFFF", "#FFCBE1", "#FF8ABB", "#FF62A4", "#FF2F86", "#FF006B"] //list of colours: cycle one by one
const sounds = ["sounds/sound1.mp3", "sounds/sound2.mp3", "sounds/sound3.mp3", "sounds/sound4.mp3", "sounds/sound5.mp3", "sounds/sound6.mp3"] //list of sounds: cycle one by one, replaces sound to next
var count = 0 //number you are on 
var degrees = 0 // rotation value
function nextsound() {
    count = count + 1
    if (count > colours.length -1) {
        count = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box1");
    box.style.backgroundColor = colours[count]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count])
    sound.setAttribute("src", sounds[count]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees = degrees + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees + "deg)"; 
}


