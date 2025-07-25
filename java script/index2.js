                                        //   when click the music in the library page , go to the music playback pag

                                        
  const musiclist = [
    {
        src : "./music/08 Amin Tijay - Kharidam Ye Glock (feat. Neemski).mp3" ,
        musicName : 'kharidam ye glock',
        artistName : "amin tijay",
        albomName :` درحال پخش از 
        tabaghe 13`,
        cover: "./image/img_20250201_202025_523.jpg"
  },
    {
        src : "./music/aaron_smith_dancin_krono_remix.mp3",
        musicName : 'dancin',
        artistName : "aaron smith",
        albomName :` درحال پخش از 
        dancin`,
        cover: "./image/aaron-smith-dancin-krono-remix.jpg"
    },
    {
         src : "./music/Amir Mahan - Razo Niaz.mp3" ,
         musicName : " razo niaz",
         artistName : "amir mahan" ,
         albomName :` درحال پخش از 
         razo niaz`,
         cover: "./image/Amir-Mahan-Razo-Niaz.jpg"
    }
      ]  

                                     //   defining the needed element 


 const albomName = document.querySelector('.albom-name');
 const coverMusic = document.getElementById('img-song');
 const musicName = document.querySelector('.span-music-name');
 const artistName = document.querySelector('.p-artist-name'); 
 const audio = document.getElementById('music-kharidam-ye-gluck');

 const backgroundTimeline = document.querySelector('.timeline')
 const Progress = document.querySelector('.timeline-progress')
 const thumb = document.querySelector('.thumb')

 const playicon = document.getElementById('play');
 
  const forward = document.getElementById('forward');
 const backward = document.getElementById('backward');


                                               // get the songsClicked from index.html and make the changes 

const songsClicked = JSON.parse(localStorage.getItem("songsClicked"))
if(songsClicked){

        audio.src = songsClicked.src;
    albomName.innerText = songsClicked.albomName;
    coverMusic.src = songsClicked.cover;
    musicName.innerText = songsClicked.musicName;
    artistName.innerText = songsClicked.artistName;
}

                                             // get the songsClicked from index.html and make the changes 

const searchMusic = JSON.parse(localStorage.getItem('searchMusic'))

if(searchMusic){

        audio.src = searchMusic.src;
    albomName.innerText = searchMusic.albomName;
    coverMusic.src = searchMusic.cover;
    musicName.innerText = searchMusic.musicName;
    artistName.innerText = searchMusic.artistName;
}


                                         //    add play and pause buttons   


playicon.addEventListener('click' , function(){
    if(audio.paused){
        audio.play();
        playicon.classList.replace('fa-play', 'fa-pause' );
    }else{
        audio.pause();
        playicon.classList.replace('fa-pause' , 'fa-play');
    }
})
                                                // add timeline 


audio.addEventListener('timeupdate' , function(){
    const percent = (audio.currentTime / audio.duration) * 100; 
    Progress.style.width = percent + '%';
    thumb.style.left = percent + '%';
}) 
                                            // when user click on the timeline


backgroundTimeline.addEventListener('click' , function(e){

    const timelineWidth = backgroundTimeline.clientWidth;
    const locationUserClick = e.offsetX;
    const newPlay = (locationUserClick / timelineWidth) * audio.duration;
    audio.currentTime = newPlay;

})
                                   // add backward and forward buttons 
                                   
                                    

    function loadmusic(index){  //  make a loadmusic function 
    audio.src = musiclist[index].src;
    albomName.innerText = musiclist[index].albomName;
    coverMusic.src = musiclist[index].cover;
    musicName.innerText = musiclist[index].musicName;
    artistName.innerText = musiclist[index].artistName;
    audio.play();
 }
                                        

 let songIndex = 0;
 
forward.addEventListener('click', function(){ //  then use "addEventListener" for forward and backward
    songIndex++;
    if(songIndex >= musiclist.length){
        songIndex = 0;
    }
    backward.style.color =  '#a4b0be';
    forward.style.color =  'aliceblue';

    loadmusic(songIndex); // add "loadmosic function" in the "backward.addEventListener"
     playicon.classList.replace('fa-play', 'fa-pause' );
})

backward.addEventListener('click' , function(){
    songIndex--;
    if( songIndex < 0){
        songIndex = musiclist.length -1;
    }
    forward.style.color = '#a4b0be';
    backward.style.color =  'aliceblue';

    loadmusic(songIndex); // add "loadmosic function" in the "forward.addEventListener"
    playicon.classList.replace('fa-play', 'fa-pause' );
})



                              