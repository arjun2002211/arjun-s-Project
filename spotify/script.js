// let play = document.getElementById('play');
let audio = new Audio('songs/1.mp3');
console.log(audio)
let pause = document.getElementById('pause');
let songIndex = 0;
let seekbar = document.getElementById('seekbar');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let mastersong = document.getElementById('mastersong')

// adding songs

let songs = [
    { name: "tum hi ho", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { name: "chale aana", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { name: "tu jaane na", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { name: "hawa banke", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { name: "falling to darkside", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { name: "Angel baby", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { name: "despacito by jubin", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { name: "mann mast magan", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { name: "mujhe khone ke bad", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
    { name: "Mehboob mere", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
]

songitems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songtitle')[0].innerText = songs[i].name;

})

// handling play/pause
pause.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        pause.classList.remove('fa-circle-play');
        pause.classList.add('fa-circle-pause');
    }
    else {
        audio.pause();
        pause.classList.remove('fa-circle-pause');
        pause.classList.add('fa-circle-play');
    }

})
// listening to events
audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    // console.log(progress);
    seekbar.value = progress;
})

seekbar.addEventListener('change', () => {
    audio.currentTime = (seekbar.value * audio.duration) / 100;
})

// making icons pause
let makeAllResume = () => {
    Array.from(document.getElementsByClassName('songicon')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        audio.pause();
    })
}

Array.from(document.getElementsByClassName('songicon')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllResume()
        songIndex = parseInt(e.target.id);
        // console.log(e.target);
        mastersong.innerText = songs[songIndex].name;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audio.src = `songs/${songIndex + 1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        pause.classList.remove('fa-circle-play');
        pause.classList.add('fa-circle-pause');
    })
})

// handling previous/next button

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audio.src = `songs/${songIndex + 1}.mp3`;
    audio.currentTime = 0;
    mastersong.innerText = songs[songIndex].name;
    audio.play();
    pause.classList.remove('fa-circle-play');
    pause.classList.add('fa-circle-pause');
})

previous.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audio.src = `songs/${songIndex + 1}.mp3`;
    mastersong.innerText = songs[songIndex].name;
    audio.currentTime = 0;
    audio.play();
    pause.classList.remove('fa-circle-play');
    pause.classList.add('fa-circle-pause');
})






