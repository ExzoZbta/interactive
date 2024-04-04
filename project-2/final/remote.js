var isTVOn = false;

// change tv image
function toggleTV() {

    if (!isTVOn) {
        document.getElementById('tv').src = "img/tv-transition.png";
        isTVOn = true;

        // show static gif during transition with delay
        document.getElementById('static').style.display = 'block';
       
        setTimeout(function() {
            document.getElementById('static').style.display = 'none';
        }, 500);

        // play static gif audio
        var staticAudio = document.getElementById('static-audio');
        staticAudio.volume = 0.1;
        staticAudio.play();
    } else {
        document.getElementById('tv').src = "img/tv-resize.png";
        isTVOn = false;
    }
}  

// turn on/off the tv when spacebar is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === " ") {
        toggleTV();
    }
});