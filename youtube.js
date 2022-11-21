let video;
let videos;
const queue = [];

setTimeout(() => {setListeners(); }, 1000);

function setListeners() {
    getVideos();
    video = document.getElementsByTagName("video")[0];
    if (video) {
        video.addEventListener("ended", function() {
           playNext();
        });
    }
}

function getVideos() {
    videos = document.getElementsByTagName("ytd-compact-video-renderer");
    for (item of videos) {
        addToPlaylistListener(item);
    }
}

function addToPlaylistListener(video) {
    video.addEventListener("mousedown", () => {
        queue.push(video.childNodes[1].childNodes[1].childNodes[1].href);
        console.log(queue);
    })
}

function playNext() {
   const nextVideo = queue.shift();
   console.log(queue);
   chrome.runtime.sendMessage({"message": "play next", "link": nextVideo});
}