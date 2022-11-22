  var count = 1;  
  function checkAnswer() { 
    var solutionInput = document.getElementById("text").value 
    if (solutionInput == "Justus") {  
      sleep(1000) 
        window.location.replace("loader.html"); 

    } else {
        count -=1;
        document.getElementById("clicks").innerHTML = count;
          if(count == 0) {
            alert("Tipp")
            location.reload();
          }
    }
    document.getElementById("text").value = null;
}

function sleep(milliseconds) { //delay function 
  const date = Date.now();
  let currentDate = null;
    do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



