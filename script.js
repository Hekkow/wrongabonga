document.addEventListener("DOMContentLoaded", function(event) {
  window.scrollTo(0, 0);
});

function parallax() {
  document.getElementById("bf").style.top = 180 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("toilet").style.top = 290 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("bed").style.top = 430 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("avatar").style.top = 550 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("dream").style.top = 550 + (0 - window.pageYOffset/12) + "%";
  document.getElementById("omid").style.top = 900 + (0 - window.pageYOffset/6) + "%";
  document.getElementById("toast").style.top = 180 + (0 - window.pageYOffset/25) + "%";
  document.getElementById("switz").style.top = 250 + (0 - window.pageYOffset/25) + "%";
  document.getElementById("sponge1").style.top = 210 + (0 - window.pageYOffset/16) + "%";
  document.getElementById("sponge2").style.top = 280 + (0 - window.pageYOffset/16) + "%";
  document.getElementById("sponge3").style.top = 330 + (0 - window.pageYOffset/35) + "%";
  document.getElementById("pee").style.top = 340 + (0 - window.pageYOffset/25) + "%";
  document.getElementById("mercury").style.top = 410 + (0 - window.pageYOffset/40) + "%";
  document.getElementById("ear").style.top = 500 + (0 - window.pageYOffset/20) + "%";
  document.getElementById("garfield").style.top = 740 + (0 - window.pageYOffset/8) + "%";
  document.getElementById("sad").style.top = 600 + (0 - window.pageYOffset/15) + "%";
  document.getElementById("penguin").style.top = 590 + (0 - window.pageYOffset/20) + "%";
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
  document.getElementById("pancake1").style.top = 120 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("pancake2").style.top = 170 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("pancake3").style.top = 280 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("pancake4").style.top = 340 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("pancake5").style.top = 380 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("strawberry1").style.top = 150 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("strawberry2").style.top = 230 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("strawberry3").style.top = 270 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("strawberry4").style.top = 360 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("strawberry5").style.top = 400 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("roti1").style.top = 180 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("roti2").style.top = 240 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("roti3").style.top = 310 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("roti4").style.top = 380 + (0 + window.pageYOffset/100) + "%";
  document.getElementById("roti5").style.top = 430 + (0 + window.pageYOffset/100) + "%";
  for (i = 0; i < document.querySelectorAll(".smol").length; i++) {
    document.getElementsByClassName("smol")[i].style.transform = "rotate(" + (window.pageYOffset/4) + "deg)";
  }

}

window.addEventListener("scroll", function(){
	parallax();
});
