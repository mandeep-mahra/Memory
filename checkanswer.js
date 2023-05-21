
import { startNew } from "./index.js";
import checkHigh from "./highscore.js"


export default function answer(pattern){
    var result = "";
    var question = pattern;
    var clicks = -1;
    console.log(question + " " + pattern+" "+ clicks);

    $(".a1").on("click", ()=>{
        clicks++;
        result += "1";
        
        if(clicks+1 == question.length)
            dispResult(result, question);    
    });
    $(".a2").on("click", ()=>{
        clicks++;
        result += "2";
        
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".a3").on("click", ()=>{
        clicks++;
        result += "3";
        
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".b1").on("click", ()=>{
        clicks++;
        result += "4";
        
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".b2").on("click", ()=>{
        clicks++;
        result += "5";
       
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".b3").on("click", ()=>{
        clicks++;
        result += "6";
       
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".c1").on("click", ()=>{
        clicks++;
        result += "7";
        
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".c2").on("click", ()=>{
        clicks++;
        result += "8";
        
        if(clicks+1 == question.length)
            dispResult(result, question);
    });
    $(".c3").on("click", ()=>{
        clicks++;
        result += "9";
        
        if(clicks+1 == question.length)
            dispResult(result, question);
    })
}

export function dispResult(result, question){
    if(result == question){
        console.log("correct");
        var val = $(".score").text();
        console.log(val);
        $(".score").html(Number(val)+1);
        console.log(Number(val)+1);
        startNew();
    }    
    else{
        console.log("incorrect");
        var val = $(".score").text();
        val = Number(val);
        checkHigh(val);
        $(".score").html(0);
        startNew();
        
    }
    console.log(result + " " + question)
    
}