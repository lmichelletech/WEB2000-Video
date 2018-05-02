let videos=document.querySelectorAll(".video")

videos.forEach(video => {
    playVideoTeaserFrom(video, 1, 2);
    video.onmouseover=()=> playVideo(video);
    video.onmouseleave = () => pauseVideo(video);
    video.onclick = () => playAndExpand(video);
})

function playAndExpand(video){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }else if(video.mozRequestFullscreen){
        video.mozRequestFullscreen();
    }else if(video.webkitRequestFullscreen){
        video.webkitRequestFullscreen();
    }
    video.muted = false;
    video.volume = 0.8;
    return video.play();
}

function playVideo(video){
    if(document.fullscreenElement){
        document.fullscreenElement.muted = false;
        document.fullscreenElement.play();
    }
    if(document.webkitFullscreenElement){
        document.webKitFullscreenElement.muted = false;
        document.webkitFullscreenElement.play();
    }
    if(document.mozFullscreenElement){
        document.mozFullscreenElement.muted = false;
        document.mozFullscreenElement.play();
    }
    if(document.msFullscreenElement){
        document.msFullscreenElement.muted = false;
        document.msFullscreenElement.play();
    }
    else{
        video.muted =true;
        video.play();
    }
}

function pauseVideo(video){
    video.pause();
}

function playVideoTeaserFrom(video, startTime, endTime){
    video.currentTime = startTime;
    video.play();


    var stopVideoAfter = (endTime -startTime) * 1000;
    setTimeout(function (){
        video.pause();
    }, stopVideoAfter);
}
