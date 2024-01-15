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

const AddBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pagenumber = document.getElementById("pagenumber");
const read = document.getElementById("read");
const form = document.getElementById("bookForm");
const bookcontainer = document.getElementById("bookcontainer");
const test = document.createElement("button");
AddBook.addEventListener("click", (event) => {
  addBookToLibrary();
  form.reset();
});
