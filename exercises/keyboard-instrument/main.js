var isTVOn = false;
var videoPlaybackTime = 0;

    // Function to toggle TV image, static image, and video
function toggleTV() {
     if (!isTVOn) {
        document.getElementById('tv').src = "img/tv-transition.png";
        isTVOn = true;

        // Show static gif during transition with delay
        document.getElementById('static').style.display = 'block';
           
        setTimeout(function() {
            document.getElementById('static').style.display = 'none';
            // Show video after static ends
            var videoElement = document.querySelector('.tv-video');
            videoElement.style.display = 'block';
            // Set video playback time
            videoElement.currentTime = videoPlaybackTime;
            // Start playing the video
            videoElement.play();
            // show static above video playing
            document.getElementById('static-overlay').style.display = 'block';
        }, 500);

        // Play static gif audio with lower volume
        var staticAudio = document.getElementById('static-audio');
        staticAudio.volume = 0.2; // Adjust volume level here
        staticAudio.play();
    } else {
        document.getElementById('tv').src = "img/tv.png";
        isTVOn = false;
        // Pause the video and store current playback time
        var videoElement = document.querySelector('.tv-video');
        videoPlaybackTime = videoElement.currentTime;
        videoElement.pause();
        // hide static above video playing
        document.getElementById('static-overlay').style.display = 'none';
    }
}


// Event listener for keydown event
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is spacebar
    if (event.key === " ") {
        toggleTV();
    }
})

// sets tv-container element to size of tv img
document.addEventListener("DOMContentLoaded", function() {

  window.addEventListener("resize", ()=>{
      getTVImageHeight()
  })

  const getTVImageHeight = () => {
      const img = document.getElementById("tv");
      const imgHeight = img.clientHeight;
      document.documentElement.style.setProperty('--tv-height', `${imgHeight}px`)
  }
  getTVImageHeight()
});