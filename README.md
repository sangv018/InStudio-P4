# InStudio-P4
<html>
    <head>
        <title>
            Project 4
        </title>
 
        <link rel="stylesheet" href="style.css">
        <script src="javascript.js" defer></script>
    </head>

    <body>
        <div id="heading">
            COLOURFUL MUSICAL TILES
        </div>


        <div id="title">
            PICK A COLOUR
        </div>

        <div class="shade-picker">
            <br>
            <br>
            <div id="pink" class="shade" onclick="shadepink();"></div>
            <div id="green" class="shade" onclick="shadegreen();"></div>
            <div id="blue" class="shade" onclick="shadeblue();"></div>
            <div id="purple" class="shade" onclick="shadepurple();"></div>
        </div>

        <div id="audiopicker">

        </div>

        <div id="tiles" class="audio">
            <div id="box1" class="box" onclick="nextsound();">
                    <audio src="sounds/sound1.m4a" id="sound1"></audio>
            </div>
            <div id="box2" class="box" onclick="nextsoundBox2();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
            <div id="box3" class="box" onclick="nextsoundBox3();">
                <audio src="sounds/sound3.m4a" id="sound3"></audio>
            </div>
            <div id="box4" class="box" onclick="nextsoundBox4();">
                <audio src="sounds/sound4.m4a" id="sound4"></audio>
            </div>
            <div id="box5" class="box" onclick="nextsoundBox5();">
                <audio src="sounds/sound5.m4a" id="sound5"></audio>
            </div>
            <div id="box6" class="box" onclick="nextsoundBox6();">
                <audio src="sounds/sound6.m4a" id="sound6"></audio>
            </div>
            <div id="box7" class="box" onclick="nextsoundBox7();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
            <div id="box8" class="box" onclick="nextsoundBox8();">
                <audio src="sounds/sound3.m4a" id="sound3"></audio>
            </div>
            <div id="box9" class="box" onclick="nextsoundBox9();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
            <div id="box10" class="box" onclick="nextsoundBox10();">
                <audio src="sounds/sound3.m4a" id="sound3"></audio>
            </div>
            <div id="box11" class="box" onclick="nextsoundBox11();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
            <div id="box12" class="box" onclick="nextsoundBox12();">
                <audio src="sounds/sound3.m4a" id="sound3"></audio>
            </div>
            <div id="box13" class="box" onclick="nextsoundBox13();">
                <audio src="sounds/sound6.m4a" id="sound6"></audio>
            </div>
            <div id="box14" class="box" onclick="nextsoundBox14();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
            <div id="box15" class="box" onclick="nextsoundBox15();">
                <audio src="sounds/sound3.m4a" id="sound3"></audio>
            </div>
            <div id="box16" class="box" onclick="nextsoundBox16();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
            <div id="box17" class="box" onclick="nextsoundBox17();">
                <audio src="sounds/sound3.m4a" id="sound3"></audio>
            </div>
            <div id="box18" class="box" onclick="nextsoundBox18();">
                <audio src="sounds/sound2.m4a" id="sound2"></audio>
            </div>
        </div>

        <div id="instructions">
            INSTRUCTIONS
        </div>
<br>
        <div id="steps">
            1. Flip the tiles to choose <br> a sound <br>
            2. Press the "PLAY SOUND" <br> button to hear the sound <br> in the order of the tiles <br>
        </div>

        <div id="play" onclick="playall();">
            PLAY SOUND
        </div>
    </body>
</html>
