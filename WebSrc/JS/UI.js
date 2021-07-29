let OkButton = document.getElementById('OkButton');
let notiButton = document.getElementById('notiButton');
let printButton = document.getElementById('printButton');
let gitButton = document.getElementById('gitButton');
let HomeButton = document.getElementById('HomeButton');
let blind = document.getElementById('blind');
let pop = document.getElementById('popupUI');


notiButton.addEventListener('click',() => {
  var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var screenWidth = window.screen.width
  var viewportScale = screenWidth / viewportWidth
  console.log(`value : ${viewportScale}`)

  if(!blind.classList.contains('showing')) {
    blind.classList.add('showing')
    pop.style.zoom = 1 / viewportScale;
  }
})

OkButton.addEventListener('click',() => {
  if(blind.classList.contains('showing')) {
    blind.classList.remove('showing')
  }
})

gitButton.addEventListener('click',() => {
  location.href=`https://github.com/FluidTrack/Report/issues`;
})

printButton.addEventListener('click',() => {
  window.print();
})

HomeButton.addEventListener('click',() => {
  location.href=`/`;
})

