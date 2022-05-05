const colours = ["#e7feff", "#ace5ee", "#00bfff", "#4169e1", "#0000cd", "#00008b"] //list of colours: cycle one by one
const sounds = ["sounds/sound1.m4a", "sounds/sound2.m4a", "sounds/sound3.m4a", "sounds/sound4.m4a", "sounds/sound5.m4a", "sounds/sound6.m4a"] //list of sounds: cycle one by one, replaces sound to next

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }

function playall() {
    console.log("clicked")
    var audio = document.querySelectorAll("audio");
    for(var i=0; i < audio.length; i++) {
        // window.setTimeout(function () {
            audio[i].play();
            console.log("playing" + audio[i])
            //will play all sounds together
        // }, 6000);
    }

    // console.log(audio);
    // audio.forEach(element => {
    // console.log("playing"+ element);
    // element.play();
    // });
}


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



var count2 = 0 //number you are on 
var degrees2 = 0 // rotation value
function nextsoundBox2() {
    count2 = count2 + 1
    if (count2 > colours.length -1) {
        count2 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound2")
    var box = document.getElementById("box2");
    box.style.backgroundColor = colours[count2]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count2])
    sound.setAttribute("src", sounds[count2]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees2 = degrees2 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees2 + "deg)"; 
}



