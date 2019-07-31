var richardMusic = new Audio('sounds/nogod.mp3');
var scottMusic = new Audio('sounds/frontierPsyCropped.mp3')

function playSound(music){
    if (!music.paused) {
        music.pause()
        document.getElementById("richardSound").innerHTML = "Play my Alarm"

    } else {
        music.play()
        document.getElementById("richardSound").innerHTML = "Pause Alarm"

    }
}