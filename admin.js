var guessWord = []

$('body').on('keydown', function(e){
    console.log(e.key);
    if (e.key === 'enter'){
        var word = $('#guess-word').val();
        $('#guess-word').val(word);
        letterSplit(word);
    }
    else{
    }
});

function letterSplit(e){
    var word = e;
    for (var i = 0; i < word.length; i++) {
    guessWord = (word.charAt(i));
    }
}