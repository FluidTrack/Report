let OkButton = document.getElementById('OkButton');
let notiButton = document.getElementById('notiButton');
let printButton = document.getElementById('printButton');
let gitButton = document.getElementById('gitButton');
let HomeButton = document.getElementById('HomeButton');
let blind = document.getElementById('blind');


notiButton.addEventListener('click',() => {
  if(!blind.classList.contains('showing')) {
    blind.classList.add('showing')
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

