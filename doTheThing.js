import answer from "./checkanswer.js";

export default function replicate(pattern){
    var n = pattern.length;
    var value;
    for(var i =0 ;i<n;i++){
        if(pattern[i] == '1')
            value = $(".a1");
        if(pattern[i] == '2')
            value = $(".a2");
        if(pattern[i] == '3')
            value = $(".a3");
        if(pattern[i] == '4')
            value = $(".b1");
        if(pattern[i] == '5')
            value = $(".b2");
        if(pattern[i] == '6')
            value = $(".b3");
        if(pattern[i] == '7')
            value = $(".c1");
        if(pattern[i] == '8')
            value = $(".c2");
        if(pattern[i] == '9')
            value = $(".c3");
        
        setTimeout(changeColor,1000*i, value);
        setTimeout(defaultColor,1000*i+500, value)
    }
    answer(pattern);
}

function changeColor(boxname){
    
    boxname.css({
        "background-color": "yellow", 
    })
}
function defaultColor(boxname){
    
    boxname.css({
        "background-color": "#ffffff", 
    })
}