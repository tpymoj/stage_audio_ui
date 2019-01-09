var rightAudio = new Audio('right.mp3');
var wrongAudio = new Audio('wrong.mp3');

var rightButton = document.getElementById('right');
var wrongButton = document.getElementById('wrong');

function setButtonsState(disabled) {
    if (disabled) { 
        rightButton.setAttribute('disabled', disabled);
        wrongButton.setAttribute('disabled', disabled);
    } else {
        rightButton.removeAttribute('disabled');
        wrongButton.removeAttribute('disabled')
    }
}

rightButton.addEventListener('click', function(){
    console.log("clicked right button");
    rightAudio.play();
    setButtonsState(true);
})

wrongButton.addEventListener('click', function(){
    console.log("clicked wrong button");
    wrongAudio.play();
    setButtonsState(true);
})

rightButton.addEventListener('ended', function(){
    console.log("right audio playback ended");
    setButtonsState(false);
})

wrongButton.addEventListener('ended', function(){
    console.log("wrong audio playback ended");
    setButtonsState(false);
})

