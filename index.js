import generator from "./Generator.js";
import replicate from "./doTheThing.js";
import {dispResult} from "./checkanswer.js";

var nam = $(".dispName");
nam.html("Memory Crunch");

var box = $(".box");
var tap_sound = new Audio('resources/press.mp3');

box.on("click",playsound);

async function playsound(){
    tap_sound.currentTime = 0;
    tap_sound.play();  
}
var patternString;

export function startNew(){

    patternString = (generator(3));
    replicate(patternString);
    
}
startNew();

