//random number
var ranNum = Math.floor(Math.random() * 3);
var msg = document.getElementById("msg");
let results = document.querySelector(".results");
let start = document.querySelector(".start");
//array
var rrs = ["Paper", "Rock", "Scissors"];
//combine array and random number as index
arr = rrs[ranNum];
//looping buttons and add event listener
var buttons = document.querySelectorAll(".rrs");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "white";
    results.addEventListener("click", (e) => {
      if (button.innerHTML == "Paper" && arr == "Rock") {
        msg.innerHTML = "Player wins";
      } else if (button.innerHTML == "Paper" && arr == "Scissors") {
        msg.innerHTML = "Computer wins";
      } else if (button.innerHTML == "Rock" && arr == "Scissors") {
        msg.innerHTML = "Player wins";
      } else if (button.innerHTML == "Rock" && arr == "Paper") {
        msg.innerHTML = "Computer wins";
      } else if (button.innerHTML == "Scissors" && arr == "Rock") {
        msg.innerHTML = "Computer wins";
      } else if (button.innerHTML == "Scissors" && arr == "Paper") {
        msg.innerHTML = "Player wins";
      } else {
        msg.innerHTML = "Draw";
      }
      document.getElementById("demo").innerHTML = `Computer selected ${arr}`;
    });
  });
});

start.addEventListener("click", () => {
  location.reload();
});
