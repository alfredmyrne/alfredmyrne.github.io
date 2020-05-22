var modal = document.getElementById("myModal");
var slides = document.getElementsByClassName("mySlides");
var vids = document.getElementsByTagName("video");

for (var i = 0; i < vids.length; i++) {
  vids[i].currentTime = 0;
  vids[i].pause();
}

function openModal() {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  video.currentTime = 0;
};

function closeModal() {
  modal.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// function play(n) {
//   var vid = slides[n].querySelector('video');
//   vid.play();
// }
//
// function pause(n) {
//   var vid = slides[n].querySelector('video');
//   vid.pause();
// }
//
// function isVideo(n) {
//
//   var type = slides[n].childNodes[0].tagName.toLowerCase();
//   if(type === 'video'){
//     return true;
//   } else {
//     return false;
//   }
// }

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

  var elem = slides[slideIndex - 1].querySelector("video"); //first child of current slide
  if (elem) {
    elem.play();
  }
}
