document.addEventListener("DOMContentLoaded", function(event) {
  window.scrollTo(0, 0);
});

function parallax() {
  document.getElementById("ashe").style.top = 130 + (0 - window.pageYOffset/400) + "%";
  document.getElementById("teemo").style.top = 230 + (0 - window.pageYOffset/400) + "%";
  document.getElementById("lee").style.top = 330 + (0 - window.pageYOffset/400) + "%";
  document.getElementById("floater3").style.top = 150 + (0 - window.pageYOffset/25) + "%";
  document.getElementById("bf").style.top = 180 + (0 - window.pageYOffset/8) + "%";
}

window.addEventListener("scroll", function(){
	parallax();
});
