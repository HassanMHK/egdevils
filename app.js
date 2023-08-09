const egdTitle = document.getElementsByClassName('egd-container')[0];
const cardBtn = document.getElementsByClassName('card-btn');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementsByClassName('nav-items');

const videoPlayer = document.querySelector('.videoPlayer');
const videosList = document.querySelector('.videosList');
const videosData = [
{id:1, text:'DCS WORLD: EGDevils Training - Air Refueling & Aerobatics', img:'https://i.ytimg.com/vi/f4sNnHzVHZk/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhGIFYoZTAP&rs=AOn4CLA7cuSGaHn2LzGFGtOEsVwoIbnJUg', video: 'https://www.youtube.com/embed/f4sNnHzVHZk'},
{id:2, text:'DCS World: Egyptian Mi-8 Helicopter Sling Load', img:'https://i.ytimg.com/vi/fzDjoOHOcak/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhGIFooZTAP&rs=AOn4CLCFV7twuDYqqdUMlOJOTne5GRdKDA', video:'https://www.youtube.com/embed/fzDjoOHOcak'},
{id:3, text:'Digital Combat Simulator - EG Devils', img:'https://i.ytimg.com/vi/Si8zhBTQKF8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1X6yMInrGmFRBe-EZWzxTohoulQ', video:'https://www.youtube.com/embed/Si8zhBTQKF8'},
{id:4, text:'DCS World - Strategic Egyptian Aircraft', img:'https://i.ytimg.com/vi/g4Kj_490_Oo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW-5qWxw5eWGnNCMKiFWpmjSI_FA', video:'https://www.youtube.com/embed/g4Kj_490_Oo'},
{id:5, text:'المروحية المصرية المى 8 ومهمة توصيل التموين لحاملة الطائرات الميسترال', img:'https://i.ytimg.com/vi/A_0tOeRziTI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD44dpiUi1tMfyKdlaHhYeZBcsSLA', video:'https://www.youtube.com/embed/A_0tOeRziTI'},
{id:6, text:'EGYPTIAN AIR FORCE [VIRTUAL]', img:'https://i.ytimg.com/vi/kLr6LTV0dRI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcne2JUmhyJvRXV_GNlzjcSbgdeQ', video:'https://www.youtube.com/embed/kLr6LTV0dRI'}
];

// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function(){
    preloader.classList.add("hide-preloader");
});

window.addEventListener('DOMContentLoaded', function(){
    const listVideos = document.querySelectorAll('.videoImgContainer');
    displayVideo(0);
    addListVideos();
    checkVideoImg();
});

egdTitle.addEventListener('click', function(){
    window.location.href = 'index.html';
});

for(let i=0; i< cardBtn.length; i++){
    let btn = cardBtn[i];
    btn.addEventListener('click', function(){
        if(btn == cardBtn[0]){
            window.open('https://www.digitalcombatsimulator.com/en/downloads/world/', '_blank');
        }else if(btn == cardBtn[1]){
            window.open('https://arma3.com/', '_blank');
        }else{
            window.open('https://www.flightsimulator.com/', '_blank');
        }
    });
}

menuBtn.addEventListener('click', function(){
    if(navLinks[0].style.display !== "none" && navLinks[0].style.display !== "block"){
        for(let i=0; i<navLinks.length; i++){
            navLinks[i].style.display = 'none';
        }
        for(let i=0; i<navLinks.length; i++){
            navLinks[i].style.display = 'block';
        }
        console.log("2 clicks for display fix");
    }
    else if(navLinks[0].style.display == "none"){
        for(let i=0; i<navLinks.length; i++){
            navLinks[i].style.display = 'block';
        }
    }else{
        for(let i=0; i<navLinks.length; i++){
            navLinks[i].style.display = 'none';
        }
    }
});


function displayVideo(x){
    const videoTemplate = `<iframe
            class="videoFrame" data-id="${videosData[x].id}" src="${videosData[x].video}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h3 class="videoText">${videosData[x].text}</h3>`
    videoPlayer.innerHTML = videoTemplate;
}

function addListVideos(){
    videosData.forEach((video) => {
        const imgTemplate = `
        <div class="videoImgContainer">
            <div class="imgHover">
                <i class="fa-regular fa-circle-play"></i>
            </div>
            <img class="videoImg" data-id="${video.id}" src="${video.img}">
            <h6 class="videoImgText">${video.text}</h6>
        </div>
        `
        videosList.innerHTML += imgTemplate;
    });
    const listVideos = document.querySelectorAll('.videoImgContainer');
    playVideo(listVideos);
}

function playVideo(listVids){
    listVids.forEach((img) => {
        img.addEventListener('click', () => {
            for(let i=1; i<=listVids.length; i++){
                if(img.children[1].dataset.id == i){
                    displayVideo(i-1);
                    showImgVideos(listVids);
                    hideImgVideo(img);
                }
            }
        });
        listHover(img);
    });
}

function listHover(img){
    img.addEventListener('mouseover', () => {
        img.children[0].style.background = "rgba(227, 227, 227, 0.2)";
    });
    img.addEventListener('mouseout', () => {
        img.children[0].style.background = "rgba(0, 0, 0, 0.3)";
    });
}

function checkVideoImg(){
    const listVideos = document.querySelectorAll('.videoImgContainer');
    const videoFrame = document.querySelector('.videoFrame');
    listVideos.forEach((img)=>{
        if(img.children[1].dataset.id === videoFrame.dataset.id){
            hideImgVideo(img);
        }
    });
}

function hideImgVideo(img){
    img.style.display = "none";
}

function showImgVideos(images){
    images.forEach(function(img){
        img.style.display = "block";
    });
}