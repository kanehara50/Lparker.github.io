console.log("hello World!");

var purpleButton = document.getElementById("purple");

console.log(purpleButton)

purpleButton.addEventListener('click', callAlert);

function callAlert() {
    //alert("you called?");
    purpleButton.innerHTML = "I got clicked!";
}
