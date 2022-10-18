function pageRedirect() {
  window.location.replace("http://www.google.com/");
}      

function checkAnswer() {
  var solutionInput = document.getElementById("text").value
  
  if (solutionInput == "42") {
    setTimeout("pageRedirect()", 1000);

  } else {
    alert("das stimmt leider nicht")
  }
}

/*function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
*/
