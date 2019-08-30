/**
 * Funtions open and close sidebar right
 */
function w3_open() {
    document.getElementById("main").style.marginRight = "120px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("myOverlay").style.display = "block";
}
  
function w3_close() {
    document.getElementById("main").style.marginRight = "0";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
    document.getElementById("myOverlay").style.display = "none";
}

/**
 * Funtions slideshow
 */
var slideIndex = 0;
showDivs();

function showDivs() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
    
    setTimeout(showDivs, 4000);  // Change image every 4 seconds
}