var wordsThusFar = []
var guessWord = []
var missPattern = []
var answer = []
var gameDifficulty = 'hard'
var word = getWord();



function startProgram(){

    wordsThusFar.push(word);

    displayWord(word);
    letterSplit();  
    difficulty(gameDifficulty);
    setLetters();
}
 
function getWord(){
    var url = window.location.search.substring(1)
    var match = /word=([^&]*)/.exec(url);
    var word = match ? decodeURIComponent(match[1]) : "";
    displayWord(word);
    return word;
}

function displayWord(x){
        $('#guess-word').val(x);
}

function letterSplit(){
    for (var i = 0; i < word.length ; i++){
    guessWord.push((word.charAt(i)));
    console.log('guessWord : ' +  guessWord);
    }
}

function difficulty(gameDifficulty){
    if (gameDifficulty == 'easy'){
        var letterToMiss = Math.floor((20/100) * word.length);
        pattern(letterToMiss);
    }
    else if (gameDifficulty == 'medium'){
        var letterToMiss = Math.floor((40/100) * word.length);
        pattern(letterToMiss);
    }
    else if (gameDifficulty == 'hard' ){
        var letterToMiss = Math.floor((80/100) * word.length);
        pattern(letterToMiss);
    }
}

function pattern (lettersToMiss){
    for(var i = 0; i < word.length; i++){
        var randomNumber = Math.floor(2 * Math.random())
        x = guessWord[i];
        if (randomNumber == 0 && lettersToMiss != 0 ){
            missPattern.push(0);
            lettersToMiss = lettersToMiss - 1;
        }
        else if (randomNumber == 1 && lettersToMiss != 0 ){
            missPattern.push(x);
        }
        else if (randomNumber == 0 && lettersToMiss == 0 ){
            missPattern.push(0);
            lettersToMiss = lettersToMiss - 1;
        }
        else if (randomNumber == 1 && lettersToMiss == 0  ){
            missPattern.push(x);
        }
    }
}     

function setLetters(){
    for (var i = 0; i < word.length; i++){
        var x = missPattern[i];
        if( x === 0 ){
            $('#set-word').append($('<input type="text" id="' + i + '" class="letter-block" maxlength="1">'));
            $('#set-word #' + i).val('');

        }
        else if( x != 0 ){
            $('#set-word').append($('<div id="' + i + '" class="letter-block">'));
            $('#set-word #' + i).html(missPattern[i]);
        }
    }       
}

function SaviorGuess(){

}