// Element declarations 
var timerEl = document.getElementById('countdown');
var homePage = document.getElementById('home-page');
var startBtn = document.getElementById('startButton');
var gameplaySection = document.getElementById('gameplay-section');
var questionArea = document.getElementById('questions');
var answerArea = document.getElementById('answers');
var gameScore = document.getElementById('game-score');
var feedbackEl = document.getElementById('feedback');
var gameOverSection = document.getElementById('gameover-section');
var endResult = document.getElementById('endResult');
var highscoreSubmitBtn = document.getElementById('highscore-submit-btn');
var scoreForm = document.getElementById('score-form');
var highscoresArea = document.getElementById('highscores');
var highscoreList = document.getElementById('highscore-list');
var initialsInput = document.getElementById('initials');
var highscoreButton = document.getElementById('highscoreButton')
var highscorePageList = document.getElementById('highscore-page-list')
var highscoreBackButton = document.getElementById('highscore-back')
var playAgain = document.getElementById('play-again')

// Variable declarations and questions list. (Collapse questionsList for better visibility).
var questionsList = [
  {
    question: 'What does HTML stand for?',
    answer: ['Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Helpful Time Management Lesson'],
    correctAnswer: 1
  },
  {
    question: 'Choose the correct HTML tag for the largest heading',
    answer: ['<head>', '<heading>', '<h1>', '<h6>'],
    correctAnswer: 2
  },
  {
    question: 'What is the correct HTML for creating a hyperlink?',
    answer: ['<a>http://www.google.com</a>', '<a href="http://google.com">Google</a>', '<a url="http://www.google.com>Google.com</a>', '<a name="http://www.google.com">Google.com</a>'],
    correctAnswer: 1
  },
  {
    question: 'How can you open a link in a new tab/browser window?',
    answer: ['<a href="url" new>', '<a href="url" target="new">', '<a href="url" target="_blank">', 'open <a “sesame”>'],
    correctAnswer: 2
  },
  {
    question: 'How can you make a numbered list?',
    answer: ['<ol>', '<list>', '<dl>', '<ul>'],
    correctAnswer: 0
  },
  {
    question: 'How can you make a bulleted list?',
    answer: ['<ul>', '<list>', '<dl>', '<ol>'],
    correctAnswer: 0
  },
  {
    question: 'What is the correct HTML for inserting an image?',
    answer: ['<img href="image.gif" alt="MyImage">', '<img alt="MyImage">image.gif</img>', '<img src="image.gif" alt="MyImage">', '<image src="image.gif" alt="MyImage">'],
    correctAnswer: 2
  },
  {
    question: 'Which HTML element defines navigation links?',
    answer: ['<nav>', '<navigate>', '<navigation>', '<navigator>'],
    correctAnswer: 0
  },
  {
    question: 'In HTML, what does the <aside> element define?',
    answer: ['The ASCII character-set; to send information between computers on the Internet', 'A navigation list to be shown at the left side of the page', 'Content aside from the page content', 'All of the above'],
    correctAnswer: 2
  },
  {
    question: 'What does CSS stand for?',
    answer: ['Creative Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
    correctAnswer: 2
  },
  {
    question: 'What is the correct HTML for referring to an external style sheet?',
    answer: ['<style src="mystyle.css">', '<stylesheet>mystyle.css</stylesheet>', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<style> src + stylesheet = style.css'],
    correctAnswer: 2
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    answer: ['In the <body> section', 'In the <head> section', 'At the end of the document', 'In the <header> section'],
    correctAnswer: 1
  },
  {
    question: 'How do you insert a comment in a CSS file?',
    answer: ['// this is a comment', '/* this is a comment */', '// this is a comment //', '^this is a comment'],
    correctAnswer: 1
  },
  {
    question: 'Which property is used to change the background color?',
    answer: ['color', 'bgcolor', 'background-color', 'BgColor'],
    correctAnswer: 2
  },
  {
    question: 'Which CSS property is used to change the text color of an element?',
    answer: ['fgcolor', 'color', 'text-color', 'color:text'],
    correctAnswer: 1
  },
  {
    question: 'Which CSS property controls the text size?',
    answer: ['text-size', 'font-size', 'text-style', 'font-style'],
    correctAnswer: 1
  },
  {
    question: 'What is the correct CSS syntax for making all the <p> elements bold?',
    answer: ['p {text-size:bold;}', '<p style="text-size:bold;">', 'p {font-weight:bold;}', '<p style="font-size:bold;">'],
    correctAnswer: 2
  },
  {
    question: 'How do you select an element with id "demo"?',
    answer: ['*demo', 'demo', '.demo', '#demo'],
    correctAnswer: 3
  },
  {
    question: 'How do you select elements with class name "test"?',
    answer: ['.test', '#test', 'test', '*test'],
    correctAnswer: 0
  },
  {
    question: 'What is the default value of the position property?',
    answer: ['fixed', 'static', 'relative', 'absolute'],
    correctAnswer: 1
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answer: ['<scripting>', '<js>', '<script>', '<javascript>'],
    correctAnswer: 2
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    answer: ['if i = 5 then', 'if i == 5 then', 'if i = 5', 'if (i == 5)'],
    correctAnswer: 3
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    answer: ['<!--This is a comment-->', '//This is a comment', '*This is a comment', '<This is a comment />'],
    correctAnswer: 1
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    answer: ['var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")'],
    correctAnswer: 1
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    answer: ['onclick', 'onmouseover', 'onchange', 'onmouseclick'],
    correctAnswer: 0
  },
  {
    question: 'How do you declare a JavaScript variable?',
    answer: ['variable carName;', 'v carName;', 'var dec = (carName);', 'var carName;'],
    correctAnswer: 3
  },
  {
    question: 'How does a "for" loop start?',
    answer: ['for (i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)', 'for i = 1 to 5', 'for (i <= 5; i++)'],
    correctAnswer: 1
  },
  {
    question: 'In JavaScript, the symbols + - * and / are:',
    answer: ['operators', 'expressions', 'comparison operators', 'None of the above'],
    correctAnswer: 0
  },
  {
    question: 'In JavaScript, the expression x!=y returns false if:',
    answer: ['the variables are equal', 'x is less than y', 'the variables are not equal', 'None of the above'],
    correctAnswer: 0
  },
  {
    question: 'In JavaScript, which of the following is a logical operator?',
    answer: ['|', '&&', '%', '/'],
    correctAnswer: 1
  },
  {
    question: 'Alert(message), close() and reset() are JavaScript:',
    answer: ['Objects', 'Methods', 'Properties', 'commands'],
    correctAnswer: 1
  },
  {
    question: "When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's JavaScript object name is:",
    answer: ['Frame', 'Document', 'Window', 'browser_window'],
    correctAnswer: 1
  },
  {
    question: 'In JavaScript, which of the following is NOT an assignment operator?',
    answer: ['+=', '||', '*=', '='],
    correctAnswer: 1
  },
  {
    question: 'A named element in a JavaScript program that is used to store and retrieve data is a _____.',
    answer: ['Method', 'assignment operator', 'Variable', 'string'],
    correctAnswer: 2
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answer: ['call myFunction()', 'myFunction()', 'call function myFunction', 'Call.myFunction()'],
    correctAnswer: 1
  },

]

var SCORE = 0;
var timeLeft = 60;
var highscores = JSON.parse(localStorage.getItem("highscores")) || []
var backupQuestions = questionsList;


function startGame() {
  homePage.style.display = "none";
  gameplaySection.style.display = "flex";
  countdown();
  renderQuestion();
}

// Start button to initiate the quiz/game .
startBtn.addEventListener("click", startGame)

// Countdown timer (var timeLeft set above to 60 seconds) 
function countdown() {
  highscoreButton.style.display = 'none';
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

// Renders question and randomizes the list
function renderQuestion() {
  questionArea.innerHTML = '';
  answerArea.innerHTML = '';
  if (questionsList.length === 0) {
    endGame();
    return;
  }

  var randomNum = Math.floor(Math.random() * questionsList.length);
  var questionObj = questionsList[randomNum];
  var questionHeading = document.createElement('h2');
  questionHeading.textContent = questionObj.question;
  questionArea.append(questionHeading);

  // Use splice to make sure previously answered questions aren't being repeated over and over again. Keeps the game fluid. 
  questionsList.splice(randomNum, 1);

  for (var i = 0; i < questionObj.answer.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("answer-button");
    answerBtn.textContent = questionObj.answer[i];
    answerBtn.addEventListener("click", function (event) {
      event.preventDefault();

      var userAnswer = event.target.textContent
      var correctAnswer = questionObj.correctAnswer;

      // if = +50pts for each question answered correctly, decrement w/ else = -10sec for each question answered incorrectly.
      if (userAnswer === questionObj.answer[correctAnswer]) {
        SCORE += 50;
        gameScore.textContent = SCORE + " POINTS";
        displayFeedback("Correct! Well done.");
      } else {
        timeLeft -= 10;
        displayFeedback("Incorrect! No bueño.");
      }

      renderQuestion();
    })
    answerArea.append(answerBtn);
  }
}

// Renders the temporary feedback ("Correct" & "Incorrect") messages as questions are answered
function displayFeedback(msg) {
  feedbackEl.innerHTML = "<hr><br>" + msg;
  setTimeout(function () {
    feedbackEl.innerHTML = " ";
  }, 2000);
}

// Renders final score at the end of game
function endGame() {
  highscoreButton.style.display = 'flex';
  gameplaySection.style.display = "none";
  gameOverSection.style.display = "flex";
  endResult.textContent = "FINAL SCORE: " + SCORE;
  renderHighscores();
}

// Renders the highscores list and stores it in local storage
function renderHighscores() {
  highscoreList.innerHTML = '';
  var sortedHs = highscores.sort(function (a, b) {
    return b.score - a.score;
  })
  for (var i = 0; i < 1; i++) {
    var hsLi = document.createElement('li');
    hsLi.textContent = sortedHs[i].username + ' - ' + sortedHs[i].score;
    highscoreList.append(hsLi);
  }
}

// Submit Button for submitting final score and inserting initials 
highscoreSubmitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var userInitials = initialsInput.value.toUpperCase();
  var entry = {
    username: userInitials,
    score: SCORE
  }
  highscores.push(entry);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  renderHighscores();
})

// User can click View High Scores Button to solely see the highest scores
function renderHighscorePage() {
  homePage.style.display = 'none';
  gameplaySection.style.display = 'none';
  gameOverSection.style.display = 'none';
  highscoresArea.style.display = 'flex';
  highscorePageList.innerHTML = '';
  var sortedHs = highscores.sort(function (a, b) {
    return b.score - a.score;
  })
  for (var i = 0; i < 5; i++) {
    var highscoreLi = document.createElement('li');
    highscoreLi.textContent = sortedHs[i].username + ' - ' + sortedHs[i].score;
    highscorePageList.append(highscoreLi);
  }
}

// Button to go back to welcome/start screen
highscoreBackButton.addEventListener('click', function (event) {
  event.preventDefault();
  homePage.style.display = 'block';
  highscoresArea.style.display = 'none';
})

highscoreButton.addEventListener('click', renderHighscorePage)

// Option to play again button. Immediately sets you in question mode and the timer begins counting down again. Points 0 out.
playAgain.addEventListener('click', () => {
  gameOverSection.style.display = 'none';
  questionsList = [];
  for (var i = 0; i < backupQuestions.length; i++) {
    questionsList.push(backupQuestions[i]);
  }
  SCORE = 0;
  timeLeft = 60;
  startGame();
})