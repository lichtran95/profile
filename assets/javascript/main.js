
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
  }
}