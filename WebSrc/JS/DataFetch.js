function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(isMobile()) {
  console.log(`Mobile`);
} else {
  console.log(`PC`);
}
