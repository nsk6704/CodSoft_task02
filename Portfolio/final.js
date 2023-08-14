window.onscroll = function() {
    const scrollValue = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    document.getElementById("navlist").style.padding = scrollValue > 90 ? "25px 10px" : "50px 10px";
    document.getElementById("navlist").style.height = scrollValue > 90 ? "100px" : "290px";
    document.getElementById("logo").style.fontSize = scrollValue > 90 ? "25px" : "35px";
    document.getElementById("foot").style.padding = scrollValue > 90 ? "15px 10px" : "10px";
    document.getElementById("pic").style.height = scrollValue > 90 ? "50px": "150px";
    document.getElementById("name").style.fontSize = scrollValue > 90 ? "10px": "30px";
    document.getElementById("name").style.marginTop = scrollValue > 90 ? "19px": "150px";
    document.getElementById("name").style.paddingLeft = scrollValue > 90 ? "10px": "300px";
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
