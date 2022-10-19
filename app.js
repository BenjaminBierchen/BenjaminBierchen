  function checkAnswer() { //func prüft Antwort 
  var solutionInput = document.getElementById("text").value //uebernahme der eingabe des inputfeldes

  if (solutionInput == "42") { //antwort pruefen 
    sleep(1000) // delay 1000ms
    setTimeout(function pageRedirect() {
      window.location.replace("loader.html"); //weiterleitung auf congrats page
    });
  } else {


  }
  
}

function sleep(milliseconds) { //delay func 
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

  function counter() {
    clicks +=1;
    document.getElementById("clicks").innerHTML = clicks;
  }