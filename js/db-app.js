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

function db_scrollLeft(identified){
    var $scroller = $('#main');

    // get the partial id of the div to scroll to
    var divIdx = identified;          
    
    // retrieve the jquery ref to the div
    var scrollTo = $(identified)  
        // retrieve its position relative to its parent
        .position().left;                   
    console.log(scrollTo);
    // simply update the scroll of the scroller
    // $('.scroller').scrollLeft(scrollTo); 
    // use an animation to scroll to the destination
    $scroller
        .animate({'scrollLeft': scrollTo}, 500);

}


function db_map(){
    var contentPopup = '<div><div class="w3-center"><img src="../images/logo72.jpg" alt="David Rubio"></img></div><div><p class="db-text-ordinario db-font-weight-600">David Rubio Benito</p><p class="db-text-ordinario">28850, Torrejón de Ardoz</p></div></div>'
		
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    var map = L.map('mapid').setView([40.4585896, -3.4793465], 17).addLayer(osm);
    L.marker([40.4585896, -3.4793465])
        .addTo(map)
        .bindPopup(contentPopup)
        .openPopup();
}

$(window).on('load', function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    this.db_map();
    
    setTimeout(function () {
        $("#popupCook").fadeIn(200);
     }, 4000);
    $("#closePopupCook, .popupCookOK").click(function() {
        $("#popupCook").fadeOut(200);
    });    
    
});