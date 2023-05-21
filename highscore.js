var highname;
var highscore
export default function checkHigh(score){
    $.getJSON("./highscore.json", function(result){
        highname = result.name;
        highscore = result.high;
        console.log(highname);
        console.log(highscore);
        if(score  >highscore)
            result.high = score;        
    })
}



