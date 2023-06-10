//your JS code here. If required.
document.addEventListener("keydown", function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  const sound = key.querySelector(".sound");
  
  if (key) {
    // Play the sound
    sound.play();
    
    // Reset the sound if it is already playing
    sound.currentTime = 0;
    
    // Add a class to highlight the pressed key
    key.classList.add("playing");
  }
});

document.addEventListener("keyup", function(event) {
