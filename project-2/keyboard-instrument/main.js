document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  if (key == "r") {
    document.body.style.backgroundColor = "pink";
  }
  else if (key == "g") {
    document.body.style.backgroundColor = "orange";
  }
  else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
  }
};