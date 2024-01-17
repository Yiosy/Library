const AddBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pagenumber = document.getElementById("pagenumber");
const read = document.getElementById("read");
const form = document.getElementById("bookForm");
const bookcontainer = document.getElementById("bookcontainer");
const formPopup = document.getElementById("newBook");
const Xbutton = document.getElementById("close-button");

const myLibrary = [];
// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
// push book to array
function addBookToLibrary() {
  let bookTitle = title.value;
  let bookAuthor = author.value;
  let bookPages = pagenumber.value;
  let bookRead = read.checked;
  if (!bookTitle || !bookAuthor || !bookPages) {
    alert("Please fill in all the required fields.");
    return;
  } else {
    let bookNew = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(bookNew);
    form.style.display = "none";
  }
}
AddBook.addEventListener("click", (event) => {
  addBookToLibrary();
  event.preventDefault();
  clearBooks();
  form.reset();
  createBookTables();
});
// creates div with book info
function appendBook(book) {
  let bookDiv = document.createElement("div");
  let titleDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let pagesDiv = document.createElement("div");
  let readDiv = document.createElement("div");
  let delDiv = document.createElement("div");
  let toggleButton = document.createElement("button");
  let delButton = document.createElement("button");

  titleDiv.textContent = "Title: " + book.title;
  authorDiv.textContent = "Author: " + book.author;
  pagesDiv.textContent = "Pages: " + book.pages;
  toggleButton.textContent = book.read ? "Mark as Unread" : "Mark as Read";
  delButton.textContent = "delete book";
  toggleButton.className = "toggleRead";
  delButton.className = "removeBook";
  bookDiv.className = `${book.read ? "read" : "notRead"}`;

  bookDiv.classList.add("book");

  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pagesDiv);

  readDiv.appendChild(toggleButton);
  delDiv.appendChild(delButton);
  bookDiv.appendChild(readDiv);
  bookDiv.appendChild(delDiv);

  bookcontainer.appendChild(bookDiv);
  delButton.addEventListener("click", function () {
    bookDiv.remove();
    myLibrary.splice(myLibrary.indexOf(book), 1);
  });
  toggleButton.addEventListener("click", () => {
    bookDiv.classList.toggle("read");
    bookDiv.classList.toggle("notRead");
    toggleButton.textContent = bookDiv.classList.contains("read")
      ? "Mark as Unread"
      : "Mark as Read";
  });
}
function createBookTables() {
  for (let i = 0; i < myLibrary.length; i++) {
    appendBook(myLibrary[i]);
  }
}
// clears dom book objects
function clearBooks() {
  while (bookcontainer.firstChild) {
    bookcontainer.removeChild(bookcontainer.firstChild);
  }
}
// popup
formPopup.addEventListener("click", () => (form.style.display = "flex"));
Xbutton.addEventListener("click", () => (form.style.display = "none"));
