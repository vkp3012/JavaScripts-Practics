const text = "a quick brown fox"
let highlighttext = " ";

for (const character of text){
    if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
        highlighttext += character.toUpperCase();
    }else{
        highlighttext += character
    }
}

console.log(highlighttext);