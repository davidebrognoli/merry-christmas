var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "E8gmARGvPlI",
    events: {
      onReady: onPlayerReady
    },
  });
}

function onPlayerReady(event) {
  player.unMute();
  event.target.playVideo();
}

document.getElementById('play').addEventListener('click', () => {
  document.getElementById('whama').scrollIntoView({behavior: "smooth"})
  player.unMute();
  player.playVideo()
})
