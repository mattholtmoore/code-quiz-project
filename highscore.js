var timerEl = document.getElementById('countdown');

function countdown() {
  var timeLeft = 60;


  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}


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

]


// EXAMPLE/REFERENCE FROM CLASS:
// var scoreForm = document.querySelector("#score-form");
// var initialsEl = document.querySelector("#initials");
// var tableEl = document.querySelector("#table");

// var scores = JSON.parse(localStorage.getItem("scores")) || [];

// console.log(scores);

// if (scoreForm) {
//   scoreForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var randomScore = Math.floor(Math.random() * 100);

//     var score = {
//       points: randomScore,
//       initials: initialsEl.value.trim()
//     }

//     scores.push(score);

//     localStorage.setItem("scores", JSON.stringify(scores));

//     location.replace('index.html');
//   });
// }

// if (tableEl) {
//   var newData = [...scores];
//   newData.sort(function(a,b) {
//     return  b.points - a.points;
//   });
//   for (var score of newData) {
//     var element = document.createElement("div");
//     element.textContent = score.initials + ": " + score.points;
//     tableEl.appendChild(element);
//   }
// } 