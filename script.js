console.log("welcome to spotify")
let SongIndex=0;
let AudioElement=new Audio("Love-Me---Justin-Bieber(PagalNew.Com.Se) (1).mp3");
let masterPlay=document.getElementById("masterplay")
let myProgressBar=document.getElementById("range")
let gif=document.getElementById("gif")
let SongItem= Array.from(document.getElementsByClassName("SongName"));

let Songs=[
    {
        songname:"true love",Filepath:"Love-Me---Justin-Bieber(PagalNew.Com.Se) (1).mp3",Coverpath:"song cover.jpeg"},
       {songname:"pirate-bgm",Filepath:"Pirates-Of-The-Caribbean-Theme.mp3",Coverpath:"sparrow background_-image.jpg"},
        {songname:"Magneta reddim",Filepath:"magenta reddim.jpg",Coverpath:"magenta reddim.jpg"},
        {songname:"true Love",Filepath:"Love-Me---Justin-Bieber(PagalNew.Com.Se) (1).mp3",Coverpath:"song cover.jpeg"},
        
    
]
+

masterPlay.addEventListener("click",()=>{
    if(AudioElement.paused||AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.classList.remove("fa-play")
        masterPlay.classList.add("fa-pause")
        gif.style.opacity=1;

    }else{
        AudioElement.pause();
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
        gif.style.opacity=0;

    }
})
myProgressBar.addEventListener("change",()=>{
    AudioElement.currentTime=myProgressBar.value*AudioElement.duration/100;
})



AudioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate")
    progress=parseInt((AudioElement.currentTime/AudioElement.duration)*100)
    console.log(progress)
    myProgressBar.value=progress

})
SongItem.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByClassName("cover")=Songs[i].Coverpath
    element.getElementsByClassName("SongName")[0].innerHTML=Songs[i].songname

})