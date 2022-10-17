    function myFunction() {
    var x = document.getElementById("text").value
            if (x == "42") {
                alert("Super")
            }
    }
let btncounter = document.querySelector("#btn")
let counter = 0;

btncounter.addEventListener('click' , function() {
    counter++
    console.log(counter)
    alert(counter)
} )