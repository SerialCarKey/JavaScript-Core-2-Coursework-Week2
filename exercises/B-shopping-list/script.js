function shoppingList(arrayOfPeople) {
  // Write your code here...
  
    let contents1 = document.querySelector("#content");
    let firstList = document.createElement("ul");
  
    for (let item of arrayOfPeople) {
      let eachItem = document.createElement("li");
      eachItem.innerText = item;
      firstList.appendChild(eachItem);
    }
    contents1.appendChild(firstList);
  
  }

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

