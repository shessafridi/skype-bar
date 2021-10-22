var menuElm = document.querySelector('.more-menu');
var menuBtn = document.getElementById('menu-btn');

menuBtn.onclick = () => {
  var hidden = menuElm.classList.contains('hidden');
  if (hidden) {
    menuElm.classList.remove('hidden');
  } else {
    menuElm.classList.add('hidden');
  }
};
