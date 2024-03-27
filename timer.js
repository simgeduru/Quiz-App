const countDate = new Date().setMinutes(20, 0);

const Timer = () => {
  const typeOfSecond = countDate.getTime();

  //tanımlamalar
  let sec = 1000;
  let min = sec * 60;
  let hour = min * 60;
  let day = hour * 24;

  //gun saat dakika ve saniye için matematiksel islemler
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / min);
  let s = Math.floor((gap % min) / sec);

  newSec =
    //dom manipulasyonu"
    document.getElementById("dk").innerText = countDate.getMinutes();
  document.getElementById("sn").innerText = countDate.getSeconds();
};

//newYear fonksiyonunun her saniye çalışması için setInterval kullandık
setInterval(() => {
  Timer();
}, 1000);
