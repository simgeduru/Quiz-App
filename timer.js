let countDate = 15;
let dk = document.getElementById("dk");
let sn = document.getElementById("sn");
let homePageLink = document.querySelector("#homePage");
let finishQuiz = document.querySelector("#clock1");
const prevBtnT = document.getElementById("prev");

const divT = document.getElementsByClassName("Choice");
const arrChoiceT = Array.from(divT);

const Timer = () => {
  countDate--;
  //tanımlamalar
  let sec = 1000;
  let min = sec * 60;
  let hour = min * 60;
  let day = hour * 24;

  //gun saat dakika ve saniye için matematiksel islemler

  let m = Math.floor(countDate / 60);
  let s = countDate - m * 60;
  //dom manipulasyonu"

  dk.innerText = m;
  sn.innerText = ":" + s;

  const BackToHomePage = () => {
    window.location = "http://127.0.0.1:5500/index.html";
  };

  if (m == 0 && s == 0) {
    dk.innerText = "Quizi Bitir";
    sn.innerText = "";
    clearInterval(Interval);

    arrChoiceT.forEach((element) => {
      element.classList.remove("testS");
      element.classList.add("pointer-events-none");
    });

    prevBtnT.classList.add("pointer-events-none");

    finishQuiz.addEventListener("click", BackToHomePage);
  }
};

//newYear fonksiyonunun her saniye çalışması için setInterval kullandık
let Interval = setInterval(() => {
  Timer();
}, 1000);
