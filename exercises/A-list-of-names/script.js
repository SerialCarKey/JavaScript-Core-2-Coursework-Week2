function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");


for(let i = 0; i < arrayOfPeople.length; i++) {

  let firstEL= document.createElement('h1');

  firstEL.innerHTML=arrayOfPeople[i].name;
  console.log(firstEL);
  content.appendChild(firstEL);

  let secondEL=document.createElement('h2');
  secondEL.innerHTML=arrayOfPeople[i].job;
  console.log(secondEL)
  content.appendChild(secondEL)
 }

}



let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
