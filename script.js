document.addEventListener("DOMContentLoaded", function(event) {
  window.scrollTo(0, 0);
});

function parallax() {
  document.getElementById("bf").style.top = 180 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("toilet").style.top = 290 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("bed").style.top = 430 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("toast").style.top = 180 + (0 - window.pageYOffset/25) + "%";
  document.getElementById("switz").style.top = 250 + (0 - window.pageYOffset/25) + "%";
  document.getElementById("ashe").style.top = 130 + (0 - window.pageYOffset/400) + "%";
  document.getElementById("teemo").style.top = 230 + (0 - window.pageYOffset/400) + "%";
  document.getElementById("lee").style.top = 330 + (0 - window.pageYOffset/400) + "%";
  document.getElementById("dorito1").style.top = 110 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("dorito2").style.top = 150 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("dorito3").style.top = 240 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("dorito4").style.top = 290 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("dorito5").style.top = 370 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("lasagna1").style.top = 130 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("lasagna2").style.top = 190 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("lasagna3").style.top = 260 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("lasagna4").style.top = 330 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("lasagna5").style.top = 350 + (0 + window.pageYOffset/100) + "%";
  for (i = 0; i < document.querySelectorAll(".smol").length; i++) {
    document.getElementsByClassName("smol")[i].style.transform = "rotate(" + (window.pageYOffset/4) + "deg)";
  }

}

window.addEventListener("scroll", function(){
	parallax();
});
