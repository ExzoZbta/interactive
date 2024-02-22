document.getElementById('summon').addEventListener('click', function() {

    var imageContainer = document.getElementById('summon-container');
    var currentImage = document.getElementById('chaos');
    var currentText = document.getElementById('summon');


    imageContainer.style.top = '50%';
    imageContainer.style.opacity = '1';
    // hides chaos image
    currentImage.style.opacity = '0';
    // hides text
    currentText.style.opacity = '0'; 
  });
  


  