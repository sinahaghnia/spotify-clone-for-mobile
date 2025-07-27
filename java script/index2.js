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
    },
    {
    src: "./music/chvrsi_-_jigh_ft_hoomaan.mp3",
    musicName: "Gigh",
    artistName: "chavrsi & hooman",
    albomName: "درحال پخش از gigh",
    cover: "./image/Chvrsi-Jigh-(Ft-Hoomaan).jpg"
  },  {
    src: "./music/06 - Only (Ft. Drake, Lil Wayne & Chris Brown).mp3",
    musicName: "only",
    artistName: "nacki minaj",
    albomName: "درحال پخش از only",
    cover: "./image/IMG_20230925_201405.jpg"
  },  {
    src: "./music/Lady Gaga X Bruno Mars - Die With A Smile.mp3",
    musicName: "Die with smile",
    artistName: " Lady gaga",
    albomName: "درحال پخش از die with smile",
    cover: "./image/Lady-Gaga-Die-With-A-Smile-x-Glimpse-Of-Us-(Mashup).jpg"
  },  {
    src: "./music/Ehsan Daryadel - Botri (320).mp3",
    musicName: "Botri",
    artistName: "Ehsan daryadel",
    albomName: "درحال پخش از Botri",
    cover: "./image/Ehsan-Daryadel-Botri.jpg"
  },  {
    src: "./music/Erfan Tahmasbi - Khodahafez.mp3",
    musicName: "Khodahafez",
    artistName: "Erfan tahmasbi",
    albomName: "درحال پخش از ",
    cover: "./image/Erfan_Tahmasbi-__B_Kalam_Khodahafez.jpg"
  },  {
    src: "./music/Sogand - Tehran.mp3",
    musicName: "Tehran",
    artistName: "Sogand",
    albomName: "درحال پخش از tahran",
    cover: "./image/E2808EUnknown20Artist20-20Man20Bikhabam20Bikhabam.jpg"
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


                                               // get the songsClicked from index.html or search.html and play the new song

const songsClicked = JSON.parse(localStorage.getItem("songsClicked"))
if(songsClicked){

        audio.src = songsClicked.src;
    albomName.innerText = songsClicked.albomName;
    coverMusic.src = songsClicked.cover;
    musicName.innerText = songsClicked.musicName;
    artistName.innerText = songsClicked.artistName;
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



                              