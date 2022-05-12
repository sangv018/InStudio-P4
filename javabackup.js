let colours = ["#FFFFFF", "#FFCBE1", "#FF8ABB", "#FF62A4", "#FF2F86", "#FF006B"] //list of colours: cycle one by one
const colours = ["#e9ffdb", "#ace5ee", "#00bfff", "#4169e1", "#0000cd", "#00008b"] 
const colours = ["#e7feff", "#90ee90", "#77dd77", "#32cd32", "#228b22", "#006400"] 
const colours = ["#dcd0ff", "#d8bfd8", "#c9a0dc", "#9370db", "#9932cc", "#663399"] 

// const colorPalette2Button = document.querySelector("button#color-palette-2")
// colorPalette2Button.addEventListener('click', () => {
//     colours = ["#e9ffdb", "#ace5ee", "#00bfff", "#4169e1", "#0000cd", "#00008b"]
// }) adding more shades of colours, creating sets

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
    let currentSound = 0;
    audio[currentSound].play();
    currentSound = currentSound + 1; 
    window.setInterval(function () {
        audio[currentSound].play();
        currentSound = currentSound + 1; 
        console.log("playing" + audio[currentSound])
        // will play all sounds together
    }, 6000);

    // for(var i=0; i < audio.length; i++) {
    //     window.setTimeout(function () {
    //         audio[i].play();
    //         console.log("playing" + audio[i])
    //         // will play all sounds together
    //     }, 6000);
    // }

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

var count3 = 0 //number you are on 
var degrees3 = 0 // rotation value
function nextsoundBox3() {
    count3 = count3 + 1
    if (count3 > colours.length -1) {
        count3 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound3")
    var box = document.getElementById("box3");
    box.style.backgroundColor = colours[count3]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count3])
    sound.setAttribute("src", sounds[count3]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees3 = degrees3 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees3 + "deg)"; 
}

var count4 = 0 //number you are on 
var degrees4 = 0 // rotation value
function nextsoundBox4() {
    count4 = count4 + 1
    if (count4 > colours.length -1) {
        count4 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound4")
    var box = document.getElementById("box4");
    box.style.backgroundColor = colours[count4]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count4])
    sound.setAttribute("src", sounds[count4]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees4 = degrees4 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees4 + "deg)"; 
}

var count5 = 0 //number you are on 
var degrees5 = 0 // rotation value
function nextsoundBox5() {
    count5 = count5 + 1
    if (count5 > colours.length -1) {
        count5 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound5")
    var box = document.getElementById("box5");
    box.style.backgroundColor = colours[count5]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count5])
    sound.setAttribute("src", sounds[count5]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees5 = degrees5 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees5 + "deg)"; 
}

var count6 = 0 //number you are on 
var degrees6 = 0 // rotation value
function nextsoundBox6() {
    count6 = count6 + 1
    if (count6 > colours.length -1) {
        count6 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound6")
    var box = document.getElementById("box6");
    box.style.backgroundColor = colours[count6]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count6])
    sound.setAttribute("src", sounds[count6]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees6 = degrees6 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees6 + "deg)"; 
}

var count7 = 0 //number you are on 
var degrees7 = 0 // rotation value
function nextsoundBox7() {
    count7 = count7 + 1
    if (count7 > colours.length -1) {
        count7 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box7");
    box.style.backgroundColor = colours[count7]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count7])
    sound.setAttribute("src", sounds[count7]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees7 = degrees7 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees7 + "deg)"; 
}

var count8 = 0 //number you are on 
var degrees8 = 0 // rotation value
function nextsoundBox8() {
    count8 = count8 + 1
    if (count8 > colours.length -1) {
        count8 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box8");
    box.style.backgroundColor = colours[count8]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count8])
    sound.setAttribute("src", sounds[count8]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees8 = degrees8 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees8 + "deg)"; 
}

var count9 = 0 //number you are on 
var degrees9 = 0 // rotation value
function nextsoundBox9() {
    count9 = count9 + 1
    if (count9 > colours.length -1) {
        count9 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box9");
    box.style.backgroundColor = colours[count9]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count9])
    sound.setAttribute("src", sounds[count9]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees9 = degrees9 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees9 + "deg)"; 
}

var count10 = 0 //number you are on 
var degrees10 = 0 // rotation value
function nextsoundBox10() {
    count10 = count10 + 1
    if (count10 > colours.length -1) {
        count10 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box10");
    box.style.backgroundColor = colours[count10]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count10])
    sound.setAttribute("src", sounds[count10]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees10 = degrees10 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees10 + "deg)"; 
}

var count11 = 0 //number you are on 
var degrees11 = 0 // rotation value
function nextsoundBox11() {
    count11 = count11 + 1
    if (count11 > colours.length -1) {
        count11 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box11");
    box.style.backgroundColor = colours[count11]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count11])
    sound.setAttribute("src", sounds[count11]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees11 = degrees11 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees11 + "deg)"; 
}

var count12 = 0 //number you are on 
var degrees12 = 0 // rotation value
function nextsoundBox12() {
    count12 = count12 + 1
    if (count12 > colours.length -1) {
        count12 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box12");
    box.style.backgroundColor = colours[count12]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count12])
    sound.setAttribute("src", sounds[count12]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees12 = degrees12 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees12 + "deg)"; 
}

var count13 = 0 //number you are on 
var degrees13 = 0 // rotation value
function nextsoundBox13() {
    count13 = count13 + 1
    if (count13 > colours.length -1) {
        count13 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box13");
    box.style.backgroundColor = colours[count13]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count13])
    sound.setAttribute("src", sounds[count13]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees13 = degrees13 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees13 + "deg)"; 
}

var count14 = 0 //number you are on 
var degrees14 = 0 // rotation value
function nextsoundBox14() {
    count14 = count14 + 1
    if (count14 > colours.length -1) {
        count14 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box14");
    box.style.backgroundColor = colours[count14]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count14])
    sound.setAttribute("src", sounds[count14]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees14 = degrees14 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees14 + "deg)"; 
}

var count15 = 0 //number you are on 
var degrees15 = 0 // rotation value
function nextsoundBox15() {
    count15 = count15 + 1
    if (count15 > colours.length -1) {
        count15 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box15");
    box.style.backgroundColor = colours[count15]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count15])
    sound.setAttribute("src", sounds[count15]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees15 = degrees15 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees15 + "deg)"; 
}

var count16 = 0 //number you are on 
var degrees16 = 0 // rotation value
function nextsoundBox16() {
    count16 = count16 + 1
    if (count16 > colours.length -1) {
        count16 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box16");
    box.style.backgroundColor = colours[count16]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count16])
    sound.setAttribute("src", sounds[count16]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees16 = degrees16 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees16 + "deg)"; 
}

var count17 = 0 //number you are on 
var degrees17 = 0 // rotation value
function nextsoundBox17() {
    count17 = count17 + 1
    if (count17 > colours.length -1) {
        count17 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box17");
    box.style.backgroundColor = colours[count17]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count17])
    sound.setAttribute("src", sounds[count17]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees17 = degrees17 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees17 + "deg)"; 
}

var count18 = 0 //number you are on 
var degrees18 = 0 // rotation value
function nextsoundBox18() {
    count18 = count18 + 1
    if (count18 > colours.length -1) {
        count18 = 0
    } //goes to the next, goes to the next number and cycles back 
    var sound = document.getElementById("sound1")
    var box = document.getElementById("box18");
    box.style.backgroundColor = colours[count18]; //changes the background colour to the one corresponding to the count
    console.log(sounds[count18])
    sound.setAttribute("src", sounds[count18]); // changes the source of the sound to the next
    sound.play();
    // box.classList.add("animation")
    degrees18 = degrees18 + 180
    // if (degrees > 720){
    //     degrees = 0
    // }
    box.style.transform = "rotateX(" + degrees18 + "deg)"; 
}






