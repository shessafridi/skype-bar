var menuElm = document.querySelector('.more-menu');
var menuBtn = document.getElementById('menu-btn');

console.log(menuElm.getBoundingClientRect().height);

menuBtn.onclick = () => {
  var hidden = menuElm.classList.contains('hidden');
  if (hidden) {
    menuElm.classList.remove('hidden');
  } else {
    menuElm.classList.add('hidden');
  }
};
