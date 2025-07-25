                                    //  defining the musics                  
   
const musicInformation = [
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
                           
                           //   add the html elements that we need to use

const backIcon = document.getElementById('back-icon');
const inputBox = document.getElementById('input-box');
const musicList = document.querySelectorAll('.music-1');
const bodyText = document.querySelector('.choose-your-favorite');
const error = document.querySelector('.error');
                                             
                             // add back button in the search page

backIcon.addEventListener('click' , function(){
    window.location.href = 'index.html';
})

                        //    when user search something in the input-box show the mach result
        
inputBox.addEventListener('input' , function(){
    const userInput = inputBox.value.toLowerCase();
    let foundMach = false;

    musicList.forEach(song=>{
        const musicName = song.querySelector('.music-name').textContent.toLowerCase();
        const artistName = song.querySelector('.artist-name').textContent.toLowerCase();
        if(userInput === ''){
            song.style.display = 'none'
        }else if(musicName.includes(userInput) || artistName.includes(userInput)){
            song.style.display = 'flex'
            foundMach = true;
        }else{
            song.style.display = 'none'
        }
    })

    if(userInput === ''){
        bodyText.style.display = 'flex'
        error.style.display = 'none'
    }else if(!foundMach){
        bodyText.style.display = 'none'
        error.style.display = 'block'
    }else{
        bodyText.style.display = 'none'
        error.style.display = 'none'
    }

})

              // when user click on the songs that showed in the search bo

musicList.forEach(( song , index )=>{
    song.addEventListener('click' ,()=>{
        const musicClicked = musicInformation[index];
        localStorage.setItem('searchMusic' , JSON.stringify(musicClicked))
        window.location.href = 'index2.html';

    })

})              



