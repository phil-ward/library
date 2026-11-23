const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID()
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}


addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 420, true)
addBookToLibrary("The Two Towers", "J.R.R. Tolkien", 460, true)
addBookToLibrary("The Return of the King", "J.R.R. Tolkien", 480, false)

for (const book of myLibrary) {
  const row = document.createElement("tr")
  const titleCell = document.createElement("td")
  titleCell.textContent = book.title
  const authorCell = document.createElement("td")
  authorCell.textContent = book.author
  const lengthCell = document.createElement("td")
  lengthCell.textContent = book.pages
  const readCell = document.createElement("td")
  if (book.read) {
    readCell.textContent = "Yes"
  } else {
    readCell.textContent = "No"
  }
  row.appendChild(titleCell)
  row.appendChild(authorCell)
  row.appendChild(lengthCell)
  row.appendChild(readCell)
  tableBody.appendChild(row)
}



const tableBody = document.querySelector("#tableBody")
const submitButton = document.querySelector("#submit")
submitButton.addEventListener('click', submitClick)


function submitClick(event) {
  event.preventDefault()
}