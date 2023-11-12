  const questions = [
    {
      questionTitle: "ما هو شكل الأرض؟",
      options: ["مثلثة", "مربعة", "كروية", "مسطحة"],
      keyAnswer: "كروية",
    },
    {
      questionTitle: "أهم عضو في جسم الانسان؟",
      options: ["الرئة", "المعدة", "الكبد", "الروح"],
      keyAnswer: "الروح",
    },
    {
      questionTitle: "ما هو لون البحر؟",
      options: ["ازرق بحري", "بلا لون", "سماوي", "ازرق"],
      keyAnswer: "ازرق بحري",
    },
    {
      questionTitle: "إذا سقطت البيضة في البحر ، ماذا يحدث لها ؟",
      options: ["جميع ما سبق", "تطفو", "تغرق", "تتبلل"],
      keyAnswer: "تتبلل",
    },
    {
        questionTitle: "له ساقان ولكن لا يستطيع المشي ما هو ؟",
        options: ["الثلاجة", "البنطالون", "الكرسي", "السروال"],
        keyAnswer: "السروال",
      },
      {
        questionTitle: "أخت خالك وليست خالتك فمن هي ؟",
        options: ["خالي", "أمي", "عمتي", "جدتي"],
        keyAnswer: "أمي",
      },
      {
        questionTitle: "أختر الفأرة",
        options: ["🐭", "🖱", "🐁", "🐀"],
        keyAnswer: "🖱",
      },
      {
        questionTitle: "أي منهم لا ينتمي؟",
        options: ["🥕", "🍉", "🍇", "🍓"],
        keyAnswer: "🥕",
      },
      {
        questionTitle: "ما هو الشيء الذي نراه ولا يرانا؟",
        options: ["الاجابة الثانية", "الباب", "المرآة", "التلفاز"],
        keyAnswer: "التلفاز",
      },
      {
        questionTitle: "ماهو ناتج ضرب 9*9",
        options: ["90", "80", "81", "99"],
        keyAnswer: "81",
      },
  ];
  const qustionsCont = document.getElementById("qustions-cont");
  const qustionsText = document.getElementById("qustions-text");
  const options = document.getElementById("options");
  const timeLeft = document.getElementById("time-left");
  const resultCont = document.getElementById("result-cont");
  const resultText = document.getElementById("result-text");
  let hent =document.getElementById("hent")
  let videoexam=document.getElementById("myVid")
  let videoexam1=document.getElementById("myVid1")
  let currentIndex = 0;
  let score = 10;
  let timer = 10;
  let countDown;
  function showQuestion(index) {
    const questin = questions[index];
    qustionsText.innerText = questin.questionTitle;
    options.innerHTML = "";
    questin.options.forEach((option) => {
      const b = document.createElement("button");
      b.textContent = option;
      options.appendChild(b);
      b.addEventListener("click", () => {
        checkAnswer(option, questin.keyAnswer);
      });
    });
  }
  function showTimer() {
    countDown = setInterval(function () {
      timer--;
      timeLeft.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        checkAnswer("", null);
      }
    }, 1000);
  }
  showQuestion(currentIndex);
  showTimer();
  function checkAnswer(myAnswer, correctAnswer) {
    currentIndex++;
    clearInterval(countDown);
    if (myAnswer === correctAnswer) {
      score--;
    }
    if (currentIndex < questions.length) {
      showQuestion(currentIndex);
      timer = 10;
      timeLeft.textContent = timer;
      showTimer();
    } else {
      showResult();
    }
  }
  function showResult() {
    qustionsCont.style.display = "none";
    resultCont.style.display = "flex";
    if((score*100/10)>60){
      videoexam.style.display = "flex";
      videoexam.play();
    }else{
      videoexam1.style.display = "flex";
      videoexam1.play();
    }
    resultText.textContent = `${score*100/10}%نسبة الغباء  `;
  }
  hent.addEventListener("click",function hentt(){
     alert(" 😅 أستخدم طريقة حقره بقرة و خليها على ربك ");
  })
