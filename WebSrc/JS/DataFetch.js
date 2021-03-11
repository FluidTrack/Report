let isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

let agent = navigator.userAgent.toLowerCase();

if(isMobile()) {
  console.log(`Mobile`);
} else {
  console.log(`PC`);
}


if (agent.indexOf("chrome") != -1) {

}
