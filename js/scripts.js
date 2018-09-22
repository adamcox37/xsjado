// Nav Dropdown //

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick= function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns= document.getElementById("dropdown-content");
    var i;
    for (i= 0; i < dropdowns.length; i++) {
      var openDropdown= dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// SHRINKING NAV BAR //

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByIdName("navbar").style.padding = "30px 10px";
    document.getElementsByIdName("logo").style.padding ="25px";
  } else {
    document.getElementsByIdName("navbar").style.padding = "80px 10px";
    document.getElementsByIdName("logo").style.padding ="35px";
  }
}
// MANUAL SLIDESHOW //

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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