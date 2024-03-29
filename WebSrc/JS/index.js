let name = document.getElementById('name');
let Range = document.getElementById('Range');
let startDay = document.getElementById('startDay');
let mainDiv = document.getElementById('mainDiv');
let advance = document.getElementById('advance');
let checkLabel = document.getElementById('checkLabel');
let serverAddress = document.getElementById('serverAddress');
let serverPort = document.getElementById('serverPort');
let noti = document.getElementById('noti');
let DB_Button = document.getElementById('DB_Button');
let searchButton = document.getElementById('searchButton');
let pop = document.getElementById('popupUI');

window.onpageshow = function (event) {
  if(advance.checked) {
    mainDiv.classList.add('hiddenShow');
    checkLabel.classList.add('hiddenShow');
  } else {
    checkLabel.classList.remove('hiddenShow');
    mainDiv.classList.remove('hiddenShow');
  }
};


advance.addEventListener('click', () => {
  if(advance.checked) {
    mainDiv.classList.add('hiddenShow');
    checkLabel.classList.add('hiddenShow');
  } else {
    checkLabel.classList.remove('hiddenShow');
    mainDiv.classList.remove('hiddenShow');
  }
})


DB_Button.addEventListener('click', () => {
  location.href="http://165.132.106.186/"
})

let isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
let agent = navigator.userAgent.toLowerCase();

if(!isMobile()) {
  if (agent.indexOf("chrome") != -1) {
    noti.classList.add('noShow');
  }
}

searchButton.addEventListener('click',() => {
  if(name.value == "") {
    alert('검색 대상을 입력하세요')
  } else {
    let url = "/Report"
    url += `?target=${name.value}&range=${Range.value}`
    url += `&startDay=${startDay.value}`
    if(advance.checked) {
      url += `&server=${serverAddress.value}:${serverPort.value}/`
    } else {
      url += `&server=http://165.132.106.186/`
    }
    console.log(url)
    location.href=url;
  }
});

