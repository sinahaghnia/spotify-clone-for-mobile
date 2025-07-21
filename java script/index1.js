
const musiclist = [
  {
    src: "./music/08 Amin Tijay - Kharidam Ye Glock (feat. Neemski).mp3",
    musicName: "kharidam ye glock",
    artistName: "amin tijay",
    albomName: "درحال پخش از tabaghe 13",
    cover: "./image/img_20250201_202025_523.jpg"
  },
  {
    src: "./music/aaron_smith_dancin_krono_remix.mp3",
    musicName: "dancin",
    artistName: "aaron smith",
    albomName:` درحال پخش از 
    dancin`,
    cover: "./image/aaron-smith-dancin-krono-remix.jpg"
  },
  {
    src: "./music/Amir Mahan - Razo Niaz.mp3",
    musicName: "razo niaz",
    artistName: "amir mahan",
    albomName: "درحال پخش از razo niaz",
    cover: "./image/Amir-Mahan-Razo-Niaz.jpg"
  }
];

                                            // add the needed Element from HTML 

const musicLibrary = document.querySelectorAll('.music-1');

                                    //   when user click on the one random music in the library

musicLibrary.forEach(function(song , index){
  song.addEventListener('click' , function(){
    const songsClicked = musiclist[index];
    localStorage.setItem('songsClicked' , JSON.stringify(songsClicked));
    window.location.href = 'index2.html'
  })
  
})

// musicLibrary.addEventListener('tuochstart' , function(){
//   musicLibrary.style.backgroudColor = 'red'
// })