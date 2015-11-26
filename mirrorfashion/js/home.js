document.querySelector('#form-busca').onsubmit = function() {
  if (document.querySelector('#q').value == '') {
      document.querySelector('#form-busca').style.background = 'red';
      return false;
  }
};

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

var timer = setInterval(trocaBanner, 20000);
function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}
timer;

var pause = document.querySelector('.pause');

pause.onclick = function() {
  if (pause.className == 'pause') {
    clearInterval(timer);
    pause.className = 'play';
  } else {
    timer = setInterval(trocaBanner, 20000);
    pause.className = 'pause';
  }
  return false;
};
