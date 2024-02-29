console.log("Welcome to Spotify");
// Initialise the variables
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongname=document.getElementById('masterSongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Counting Stars-One Republic", fliePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Delicate-Taylor Swift", fliePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Perfect-Ed Sheeran", fliePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"City of Stars-La La Land", fliePath:"song/4.mp3",coverPath:"cover/4.jpg"}
]

songitems.forEach((element,i)=>{
    // console.log(element,i);
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        // alert('hi');
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        //     element.addEventListener('click',(e)=>{
        // songIndex=parseInt(e.target.id);
        
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        


        //     })
        
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity=0;

    }
})

// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    // e.target.classList.add('fa-pause-circle');
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0)
        { 
            e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongname.innerText=songs[songIndex].songName;
    

        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;}
        else{
            audioElement.pause();
            
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }


    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=3){
        songIndex=0;
    }
    else{
    songIndex+=1;}
    

    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongname.innerText=songs[songIndex].songName;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;


})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
      

    }
    else{
    songIndex -= 1;}

    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
   


})

