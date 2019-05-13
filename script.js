// window.addEventListener('keydown', function(e)
// {
//     const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keycode}"]`);    
//     if(!audio) return; //stop the function from running together
//     audio.currentTime = 0; //rewind to start
//     audio. play();
//     key.classList.add('playing');
// });

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);