var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("time").innerHTML = 10 - timeleft;
  timeleft -= 1;
}, 1000);
