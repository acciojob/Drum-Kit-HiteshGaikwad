//your JS code here. If required.
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  
  if (!audio) return; // 
  
  audio.currentTime = 0; // Reset the audio playback
  audio.play();
  
  key.classList.add('playing'); // Add class for styling when key is pressed
}

// Function to handle the keydown event
function handleKeyDown(event) {
  playSound(event.keyCode);
}

// Function to remove the styling class when transition ends
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  
  this.classList.remove('playing');
}

// Add event listeners
window.addEventListener('keydown', handleKeyDown);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener("keyup", function(event) {
 const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if (key) {
    key.classList.remove("playing");
  }
});