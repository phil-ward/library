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
  return newBook
}

const tableBody = document.querySelector("#tableBody")
const submitButton = document.querySelector("#submit")
const dialogTitle = document.querySelector("#title")
const dialogAuthor = document.querySelector("#author")
const dialogLength = document.querySelector("#length")
const dialogRead = document.querySelector("#read")
submitButton.addEventListener('click', addBook)

addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 420, true)
addBookToLibrary("The Two Towers", "J.R.R. Tolkien", 460, true)
addBookToLibrary("The Return of the King", "J.R.R. Tolkien", 480, false)
refreshTable()

function refreshTable() {
  tableBody.replaceChildren()
  for (const book of myLibrary) {
    const row = document.createElement("tr")
    row.dataset.id = book.id
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
    const buttonCell = document.createElement("td")
    const deleteButton = document.createElement("button")
    buttonClasses = ["btn-solid", "btn-styled", "btn-xs"]
    deleteButton.textContent = "Delete"
    deleteButton.classList.add(...buttonClasses)
    deleteButton.classList.add("theme-danger")
    deleteButton.addEventListener('click', deleteBook)
    const readButton = document.createElement("button")
    readButton.textContent = "Read"
    readButton.classList.add(...buttonClasses)
    readButton.classList.add("theme-primary")
    readButton.classList.add("mx-3")
    readButton.addEventListener('click', readBook)
    row.appendChild(titleCell)
    row.appendChild(authorCell)
    row.appendChild(lengthCell)
    row.appendChild(readCell)
    row.appendChild(buttonCell)
    buttonCell.appendChild(readButton)
    buttonCell.appendChild(deleteButton)
    tableBody.appendChild(row)
  }
}


function addBook(event) {
  let newTitle = dialogTitle.value
  let newAuthor = dialogAuthor.value
  let newLength = dialogLength.value
  let newRead = dialogRead.value
  addBookToLibrary(newTitle, newAuthor, newLength, newRead)
  refreshTable()
  event.preventDefault()
}

function deleteBook(event) {
  const row = event.target.parentElement.parentElement
  const index = myLibrary.findIndex((book) => book.id === row.dataset.id)
  myLibrary.splice(index, 1)
  refreshTable()
}

function readBook(event) {
  const row = event.target.parentElement.parentElement
  const index = myLibrary.findIndex((book) => book.id === row.dataset.id)
  myLibrary[index].read = !myLibrary[index].read
  refreshTable()
}

