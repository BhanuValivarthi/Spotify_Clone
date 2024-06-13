let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.querySelector("#masterplay");
let myProgressBar = document.querySelector("#myProgressBar");
let gif = document.querySelector("#gif");
let songItems = document.querySelectorAll(".songItem");
let masterSong = document.querySelector("#masterSong");
let songs = [
     {song:"Arjun-Reddy" ,filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
     {song:"Gopala gopala" ,filePath:" songs/2.mp3",coverPath:"images/2.jpg"},
     {song:"Mad-malli malli" ,filePath:"songs/3.mp3",coverPath:"images/3.jpg"},
     {song:"RRR" ,filePath:"songs/4.mp3",coverPath:"images/4.jpg"}
]
songItems.forEach((element,i)=>{
    console.log(element,i);
  element.querySelector("img").src = songs[i].coverPath;
  element.querySelector(".songName").innerText = songs[i].song; 
})


masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
          audioElement.play();
           masterSong.innerText = songs[songIndex].song;
          masterPlay.classList.remove("fa-play-circle");
          masterPlay.classList.add("fa-pause-circle");
          gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
          masterPlay.classList.remove("fa-pause-circle");
          gif.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration*100));
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

let songItemPlay = document.querySelectorAll(".songItemPlay");

const makeAllPlays=(()=>{
    songItemPlay.forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    })
})

songItemPlay.forEach((element)=>{
    element.addEventListener(("click"),(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src =`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
         masterSong.innerText = songs[songIndex].song;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })

})
document.querySelector("#next").addEventListener(("click"),()=>{
    if(songIndex>3){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
         masterSong.innerText = songs[songIndex].song;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

})
document.querySelector("#previous").addEventListener(("click"),()=>{
    if(songIndex<0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
         masterSong.innerText = songs[songIndex].song;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

})

