window.addEventListener("keydown",);

function playSound() {
        // console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        // console.log(audio);
    
        // stop the function from running all together
        if(!audio) return; 
    
        // rewind to the start for repeated playing
        audio.currentTime = 0
        audio.play();
    
        // console.log(key);
        key.classList.add("playing");
}

function removeTransition(e) {
    // console.log(e);
    // skip it if it's not a transform
    if (e.propertyName !== "transform") return;
    // console.log(e.propertyName);
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));