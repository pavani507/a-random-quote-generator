/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote: "Today a reader, tomorrow a leader.",
    source: "Margaret Fuller"
  },
  {
    quote: "It doesn’t matter how slowly you go as long as you do not stop.",
    source: "Confucius",
    citation: "Book"
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    source: "Carol Burnett"
  },
  {
    quote: "What would you do if you were not afraid?",
    source: "Sheryl Sandberg",
    year: "2004"
  },
  {
    quote: "Nothing will work unless you do.",
    source: "Maya Angelou"
  },
  {
    quote:
      "You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion.",
    source: "Richard Branson"
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  return random;
}

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  var n = getRandomQuote();
  var quoteElement = document.getElementsByClassName("quote")[0];
  var quoteText = document.createTextNode(quotes[n].quote);
  quoteElement.replaceChild(quoteText, quoteElement.childNodes[0]);
  var sourceElement = document.getElementsByClassName("source")[0];
  var sourceText = document.createTextNode(quotes[n].source);
  sourceElement.replaceChild(sourceText, sourceElement.childNodes[0]);
  if (quotes[n].citation) {
    var citationElement = document.getElementsByClassName("citation")[0];
    var citationText = document.createTextNode(quotes[n].citation);
    if (!citationElement) {
      citationElement = document.createElement("span");
      citationElement.className = "citation";
      citationElement.appendChild(citationText);
    } else {
      citationElement.replaceChild(citationText, citationElement.childNodes[0]);
    }
    if (sourceElement.childNodes[1]) {
      sourceElement.replaceChild(citationElement, sourceElement.childNodes[1]);
    } else {
      sourceElement.appendChild(citationElement);
    }
  } else {
    var citationElement = document.getElementsByClassName("citation")[0];
    if (citationElement) {
      sourceElement.removeChild(citationElement);
    }
  }
  if (quotes[n].year) {
    var yearElement = document.getElementsByClassName("year")[0];
    var yearText = document.createTextNode(quotes[n].year);
    if (!yearElement) {
      yearElement = document.createElement("span");
      yearElement.className = "year";
      yearElement.appendChild(yearText);
    } else {
      yearElement.replaceChild(yearText, yearElement.childNodes[0]);
    }
    if (sourceElement.childNodes[2]) {
      sourceElement.replaceChild(yearElement, sourceElement.childNodes[2]);
    } else {
      sourceElement.appendChild(yearElement);
    }
  } else {
    var yearElement = document.getElementsByClassName("year")[0];
    if (yearElement) {
      sourceElement.removeChild(yearElement);
    }
  }
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
