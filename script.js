//your JS code here. If required.
document.addEventListener("keydown", function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const sound = key.querySelector(".sound");
  
  if (key) {
    sound.play();

    sound.currentTime = 0;
    
    key.classList.add("playing");
  }
});

document.addEventListener("keyup", function(event) {
 const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if (key) {
    key.classList.remove("playing");
  }
});