
//sets button color from HTML 
var blueButton = document.querySelector("#blueBtn");
var orangeButton = document.querySelector("#orangeBtn");
var greenButton = document.querySelector("#greenBtn");

var jumbotron = document.querySelector(".jumbotron");
var donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
var volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

//adds a when clicked function to change the colour
blueButton.addEventListener("click", clickBlue);
function clickBlue () {                                                        // function for when clicked blue button
    jumbotron.style.backgroundColor = "#588fbd";
    donateBtn.style.backgroundColor = "orange";
    volunteerBtn.style.backgroundColor = "black";
    volunteerBtn.style.color = "white";
}

orangeButton.addEventListener("click", clickOrange);
function clickOrange () {                                                       //function for when clicked orange button
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBtn.style.backgroundColor = "#5751fd";
    volunteerBtn.style.backgroundColor = "aqua";
    volunteerBtn.style.color = "white";
}

greenButton.addEventListener("click", clickGreen);
function clickGreen () {                                                        //function for when clicked green button
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBtn.style.backgroundColor = "black";
    volunteerBtn.style.backgroundColor = "#black";
}

//2nd part - when the submit button is pressed check if all requirements are met
let submit = document.querySelector("form button");;
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let registerLine = document.querySelectorAll(".form-control");
  let ifSubmit = true;
  
  for (let i = 0; i < registerLine.length; i++) {
     
      if (registerLine[i].value.length === 0 || !registerLine[0].value.includes("@")) {
        ifSubmit = false;
        registerLine[i].style.backgroundColor = "red";
        } else {
            registerLine[i].style.backgroundColor = "transparent";
        }
    };
    
    if (ifSubmit) {
        registerLine.forEach((field) => field.value = " ");
        alert("Thank you for completing the form!");
    };
}); 