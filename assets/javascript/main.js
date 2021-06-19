
var posCenter = document.querySelector('.pos-center');
function toggleMenu() {
	posCenter.classList.add("is-show");
}
function closeMenu() {
	posCenter.classList.remove("is-show");
}

function tabAbout(evt, tabAbout) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabAbout).style.display = "block";
	evt.currentTarget.className += " active";
}

// fixed
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
	$(".item-nav a").removeClass("is-active");
  }
}


$(document).ready(function(){
	// Add smooth scrolling to all links
	$(".item-nav a").on('click', function(event) {
	$(".item-nav a").removeClass("is-active");
	$(this).addClass("is-active");
	posCenter.classList.remove("is-show");
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });