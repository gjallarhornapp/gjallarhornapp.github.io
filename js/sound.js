var richardMusic = new Audio('sounds/nogod.mp3');
var scottMusic = new Audio('sounds/frontierPsyCropped.mp3')
var andrewMusic = new Audio('sounds/volatile.mp3')
var rhettMusic = new Audio('sounds/choppa.mp3')
var austinMusic = new  Audio('sounds/bolt.mp3')


function playSound(music, id){
    if (!music.paused ) {
        music.pause()
        document.getElementById(id).innerHTML = "Play my Alarm"
    }
     else {
        music.play()
        document.getElementById(id).innerHTML = "Pause Alarm"

    }
}