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

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  } else if ($(event.target).hasClass("modal-content")) {
    closeModal();
  } else if (event.target.tagName.toLowerCase() == "img" && modal.style.display === "none") {
    closeModal();
  } else {
    openModal();
  }

  if (event.target.tagName.toLowerCase() === "video"){
    event.target.play();
  }

});

function closeModal() {
  modal.style.display = "none";

  if (document.querySelector("video").playing) {
    //stop video
    this.pause();
  }
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

  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";


}
