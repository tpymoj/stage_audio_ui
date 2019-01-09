var rightAudio = document.getElementById('rightAudio');
var wrongAudio = document.getElementById('wrongAudio');

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
    rightAudio.play();
    setButtonsState(true);
})

wrongButton.addEventListener('click', function(){
    wrongAudio.play();
    setButtonsState(true);
})

rightAudio.addEventListener('ended', function(){
    console.log("right audio playback ended");
    setButtonsState(false);
})

wrongAudio.addEventListener('ended', function(){
    console.log("wrong audio playback ended");
    setButtonsState(false);
})

