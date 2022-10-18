
  function checkAnswer() {
  var solutionInput = document.getElementById("text").value

  if (solutionInput == "42") {
    sleep(1000)
    setTimeout(function pageRedirect() {
      window.location.replace("loader.html");
    });
  }
  
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

