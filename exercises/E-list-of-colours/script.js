function listOfColours(colours) {
  // Write your code here..
    let contents = document.querySelector("#content");
    let dropDownMenu = document.createElement("select");
    let paragraph = document.createElement("p");
    paragraph.innerText = `You have selected:`;
  
    for (let colour of colours) {
      let option = document.createElement("option");
      option.innerText = colour;
      dropDownMenu.appendChild(option);
    }
  
    dropDownMenu.addEventListener("change", addColour);
    
    function addColour(main) {
      paragraph.style.backgroundColor = main.target.value;
      paragraph.innerText = `You have selected: ${main.target.value}`;
    }
  
    contents.appendChild(paragraph);
    contents.appendChild(dropDownMenu);
  }






const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
