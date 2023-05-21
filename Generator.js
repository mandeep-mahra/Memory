
export default function generator(size){
    var random_string = ""
    for(var i = 0 ; i<size; i++){
        var temp = Math.random() * 9;
        temp ++;
        temp = Math.floor(temp);
        random_string += temp;
    }
    return random_string;
}