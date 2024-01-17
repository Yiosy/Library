const AddBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pagenumber = document.getElementById("pagenumber");
const read = document.getElementById("read");
const form = document.getElementById("bookForm");
const bookcontainer = document.getElementById("bookcontainer");

const test = document.createElement("div");
test.innerHTML = "Click me";
AddBook.appendChild(test);
const myLibrary = [
  {
    title: "estest",
    author: "asdadssad",
    pages: 242,
    read: false,
  },
];
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
  let bookNew = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  myLibrary.push(bookNew);
}

AddBook.addEventListener("click", (event) => {
  addBookToLibrary();
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

  readDiv.textContent = `Status: ${book.read ? "finished" : "not finished"}`;
  delDiv.appendChild(toggleButton);
  delDiv.appendChild(delButton);
  bookDiv.appendChild(readDiv);
  bookDiv.appendChild(delDiv);

  bookcontainer.appendChild(bookDiv);
}
function createBookTables() {
  for (let i = 0; i < myLibrary.length; i++) {
    appendBook(myLibrary[i]);
  }
}
