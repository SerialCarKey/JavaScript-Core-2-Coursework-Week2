function readingList(books) {
  // Write your code here...

for (var i = 0; i < books.length; i++);
console.log(books[i])

  let contents = document.querySelector("#content");

  let topHeader = document.createElement("h1");                           
  topHeader.innerText = "Book list";
  contents.appendChild(topHeader);

  let listOfBooks = document.createElement("ul");                           

  for (let name of books) {
    let eachItem = document.createElement("li");                             
    eachItem.classList.add("my-list");                                     


    if (name.alreadyRead === true) {                                       
      eachItem.classList.add("book-is-read");
    } else {
      eachItem.classList.add("book-not-read");
    }

    let bookInfo = document.createElement("p");                               
    bookInfo.innerText = `${name.title} - ${name.author}`;

    let bookImage = document.createElement("img");                          
    bookImage.setAttribute("src", "./Img/" + `${name.title}` + ".jpg");
    bookImage.setAttribute("alt", "The cover image of " + `${name.title}`);
    bookImage.classList.add("book-image");
    bookImage.classList.add("book-image");

    eachItem.append(bookInfo, bookImage);                                                   
    listOfBooks.appendChild(eachItem);                                               
  }

  contents.appendChild(listOfBooks);                                          
}


const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);

for (var i = 0; i < books.length; i++);
console.log(books[i])

function readingList(books) {
  let contents = document.querySelector("#content");

  let pageHeader = document.createElement("h1");                            
  pageHeader.innerText = "Book list";
  contents.appendChild(pageHeader);

  let listOfBooks = document.createElement("ul");                          
  for (let book of books) {
    let eachItem = document.createElement("li");                              
    eachItem.classList.add("my-list");                                      


    if (book.alreadyRead === true) {                                        
      eachItem.classList.add("book-is-read");
    } else {
      eachItem.classList.add("book-not-read");
    }

    let bookInfo = document.createElement("p");                                
    bookInfo.innerText = `${book.title} - ${book.author}`;

    let bookImage = document.createElement("img");                           
    bookImage.setAttribute("src", "./Img/" + `${book.title}` + ".jpg");
    bookImage.setAttribute("alt", "The cover image of " + `${book.title}`);
    bookImage.classList.add("book-image");
    bookImage.classList.add("book-image");

    eachItem.append(bookInfo, bookImage);                                                  
    listOfBooks.appendChild(eachItem);                                              
  }

  contents.appendChild(listOfBooks);                                          
}