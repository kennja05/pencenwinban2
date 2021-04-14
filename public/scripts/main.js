document.addEventListener("DOMContentLoaded", (e) => {
    //scriptssss
    //TODO
    //director password
    function playMusic(){
        const sound = new Howl({
            src: ['audio/instantConcert.mp3']
        })
        sound.play()
    }
    const div = document.getElementById('audio')
    div.addEventListener('click', () => {
        console.log('shit')
        playMusic()
    })
})