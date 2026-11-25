# Library

A small library app built as a solution to [The Odin Project's Library assignment](https://www.theodinproject.com/lessons/node-path-javascript-library) (JavaScript path).

Books are stored as objects in an array, and the display is rendered from that array. The data and the DOM are kept as separate concerns: the array is the single source of truth, and the table is regenerated from it after every change.

## Features

- Add a book through a modal form (title, author, number of pages, read status)
- List all books in a table
- Delete a book
- Toggle a book's read status
- Each book gets a unique, stable `id` from `crypto.randomUUID()`, so books stay correctly matched to their rows after removals

There is no persistent storage — books reset on page reload, as the assignment allows.

## Running it

No build step or dependencies to install. Open `index.html` in a browser, or serve the folder locally, for example:

```bash
python3 -m http.server
# then visit http://localhost:8000
```

Bootstrap and Font Awesome are loaded from CDNs, so an internet connection is needed for styling and icons.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Markup: navbar, the books table, and the `<dialog>` add-book form |
| `app.js` | Application logic: the `Book` constructor, library array, rendering, and event handlers |
| `style.css` | Minimal custom styles (layout is mostly Bootstrap) |

## How it works

`app.js` holds the whole app:

- `myLibrary` — the array of book objects, the source of truth.
- `Book(title, author, pages, read)` — constructor. Guards against being called without `new` and assigns each book an `id` via `crypto.randomUUID()`.
- `addBookToLibrary(title, author, pages, read)` — creates a `Book` and pushes it onto `myLibrary`.
- `refreshTable()` — clears the table body and rebuilds a row per book. Each row carries the book's id in a `data-id` attribute so its buttons can find the matching object.
- `addBook(event)` — reads the form fields, adds the book, re-renders, and calls `event.preventDefault()` to stop the form submitting to a server.
- `deleteBook(event)` / `readBook(event)` — locate the book by the row's `data-id`, then remove it or flip its `read` flag, and re-render.

The app seeds a few Lord of the Rings titles on load so the table isn't empty.

## Built with

- Vanilla JavaScript (no framework, no build tooling)
- [Bootstrap](https://getbootstrap.com/) (CDN)
- [Font Awesome](https://fontawesome.com/) (CDN)
