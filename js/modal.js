var modal = document.getElementById("myModal");
var slides = document.getElementsByClassName("mySlides");

var vids = document.getElementsByTagName("video");

function stopAllVids() {
  //Because fuck autoplay
  for (var i = 0; i < vids.length; i++) {
    vids[i].currentTime = 0;
    vids[i].pause();
  }
}

function bindEvent(el, eventName, eventHandler) {
  if (el.addEventListener){
    el.addEventListener(eventName, eventHandler, false);
  } else if (el.attachEvent){
    el.attachEvent('on'+eventName, eventHandler);
  }
}

//def. of whether or not a video is playing
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

stopAllVids();

function openModal() {
  modal.style.display = "block";

  //if modal box not open -> dont play video (right click and play)
}
// 
// function findVideo() {
//   for (i = 0; i < vids.length; i++) {
//     if (vids[i].)
//   }
// }

var videoIndex = -1;
var thumbNailVids = vids.length / 2;
var name = document.title;
var body = document.querySelector('body');

bindEvent(body, "click", function (event) {
  if (event.target == modal) {
    closeModal();
  } else if ($(event.target).hasClass("modal-content")) {
    closeModal();
  } else if (event.target.tagName.toLowerCase() == "img" && modal.style.display === "none") {
    closeModal();
  } else if (event.target.getAttribute('id') == "border" + name){

    openModal();
    if (event.target.tagName.toLowerCase() == "video"){
    var vid = event.target;
    vid[0].play();
    }
  }


});

function closeModal() {
  modal.style.display = "none";

  stopAllVids();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;


  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";



}
