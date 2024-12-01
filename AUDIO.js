const audioPlayer1 = document.getElementById('audioPlayer1');
const playPauseButton1 = document.getElementById('playPauseButton1');
const speedUpButton1 = document.getElementById('speedUpButton1');
const speedDownButton1 = document.getElementById('speedDownButton1');

let isPlaying1 = false;

playPauseButton1.addEventListener('click', () => {
    if (isPlaying1) {
        audioPlayer1.pause();
        isPlaying1 = false;
        playPauseButton1.src = 'play-button 1.png'; 
    } else {
        audioPlayer1.play();
        isPlaying1 = true;
        playPauseButton1.src = 'pause.png'; 
    }
});

speedUpButton1.addEventListener('click', () => {
    audioPlayer1.playbackRate = 2.0; 
});

speedDownButton1.addEventListener('click', () => {
    audioPlayer1.playbackRate = 1.0; 
});


const audioPlayer2 = document.getElementById('audioPlayer2');
const playPauseButton2 = document.getElementById('playPauseButton2');
const speedUpButton2 = document.getElementById('speedUpButton2');
const speedDownButton2 = document.getElementById('speedDownButton2');

let isPlaying2 = false;

playPauseButton2.addEventListener('click', () => {
    if (isPlaying2) {
        audioPlayer2.pause();
        isPlaying2 = false;
        playPauseButton2.src = 'play-button 1.png'; 
    } else {
        audioPlayer2.play();
        isPlaying2 = true;
        playPauseButton2.src = 'pause.png'; 
    }
});

speedUpButton2.addEventListener('click', () => {
    audioPlayer2.playbackRate = 2.0; 
});

speedDownButton2.addEventListener('click', () => {
    audioPlayer2.playbackRate = 1.0; 
});