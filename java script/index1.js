
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
                                      // when click on the magnify icon go to search page
                                     
const searchIcon = document.getElementById('magnify');

searchIcon.addEventListener('click' , function(){
    window.location.href = 'search.html';
})