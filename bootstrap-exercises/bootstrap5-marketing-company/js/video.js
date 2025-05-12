const video = document.getElementById("top-video");

video.muted = true;
video.play();

video.addEventListener("loadedmetadata", function () {
  var videoRatio = video.videoWidth / video.videoHeight;
  var container = video.parentNode;
  var containerRatio = container.offsetWidth / container.offsetHeight;

  if (videoRatio < containerRatio) {
    video.style.width = "100%";
    video.style.height = "auto";
  } else {
    video.style.width = "auto";
    video.style.height = "100%";
  }
});
