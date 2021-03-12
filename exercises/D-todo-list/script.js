function todoList(todos) {
  let content = document.querySelector( '#content')
  let list = document.createElement('ul');
  content.appendChild(list);

  
  todos.forEach((todo) => {
    let eventList = document.createElement('li');
    eventList.innerText = todo.todo;
    list.appendChild(eventList);

    eventList.addEventListener('click', strike);
    function strike(){
      if (eventList.style.textDecorationLine === 'line-through') {
        eventList.style.textDecorationLine = 'initial';
      } else {
        eventList.style.textDecorationLine = 'line-through';
    } console.log(list)
  }
 })
}

const todos = [
  {todo: 'wash the dishes'}, 
  {todo: 'walk the dog'}, 
  {todo: 'learn javascript'}, 
  {todo: 'go shopping'}
];

todoList(todos);
  