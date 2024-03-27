const GetData = async () => {
  const data = await fetch("https://the-trivia-api.com/v2/questions");
  let dataJson = await data.json();
  return dataJson;
};
let questions = new Array();
GetData().then((res) => {
  questions = Array.from(res);
  GenerateQuestion();
  //console.log(questions);
});

//soruları basacağımız elemanları çekip arraye atıyoruz
const textChoice = document.getElementsByClassName("text");
const div = document.getElementsByClassName("Choice");
const outputChoice = Array.from(textChoice);
const arrChoice = Array.from(div);
const prevBtn = document.getElementById("prev");

let selectedChoice = "";
let test = new Array();
let answer = "";
let correctAnswerCounter = 0;
let removedQuestion = new Array();

const questionDOM = document.getElementById("question");

const GenerateQuestion = () => {
  try {
    if (questions.length !== 0 || questions.length <= 10) {
      //soruları alıp bir arrayde depoladık.

      let answers = new Array();
      answers.push(questions[0].correctAnswer);
      console.log(questions[0].question);
      console.log(questions[0].correctAnswer, "dogru cevap");
      let newAnswers = answers.concat(questions[0].incorrectAnswers);
      questionDOM.innerText = questions[0].question.text;

      //elemanları game pagede gösterme işlemi
      outputChoice.forEach((element, index) => {
        //let index = Math.floor(Math.random() * newAnswers.length);
        element.innerText = newAnswers[index];
        //newAnswers.splice(index, 1);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

arrChoice.forEach((element) => {
  element.addEventListener("click", function (event) {
    selectedChoice = this.children[1];

    isAnswerTrue(selectedChoice);
    removedQuestion.push(questions.shift());
    test = [...questions];
    //console.log(test);
    GenerateQuestion();
  });
});

prevBtn.addEventListener("click", function () {
  console.log(answer);
  try {
    if (correctAnswerCounter > 0 && answer == true) {
      correctAnswerCounter -= 5;
    } else if (correctAnswerCounter <= 0) {
      correctAnswerCounter = 0;
    }

    console.log(correctAnswerCounter);
    questions.unshift(removedQuestion.pop());

    test = [...questions];
    //console.log(test);
    GenerateQuestion();
  } catch (error) {
    console.log("geri dönülecek soru yok.");
  }
});

const isAnswerTrue = (selectedChoice) => {
  try {
    console.log("sectiğim", selectedChoice.innerText);
    if (selectedChoice.innerText == questions[0].correctAnswer) {
      answer = true;
      correctAnswerCounter += 5;
    } else {
      answer = false;
    }
  } catch (error) {
    console.log("Oyun bitti, gösterilecek soru kalmadı.");
    console.log(correctAnswerCounter);
  }
  console.log(answer);
  console.log(correctAnswerCounter);
};
