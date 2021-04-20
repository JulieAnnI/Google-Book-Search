import React, { useState, useEffect } from "react";
import API from "../utils/API";

import BookCard from "../components/BookCard";


function Saved() {
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadSavedBooks();
  }, []);

  // Loads all books and sets them to books
  function loadSavedBooks() {
    API.getSavedBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(book) {
    API.deleteBook(book._id)
      .then((res) => {
        loadSavedBooks();
      })
      .catch((err) => console.error(err));
  }

  return (
        <div>
          {books.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              onClick={() => deleteBook(book)}
              label="Delete"
            ></BookCard>
          ))}
        </div>
     
  );
}

export default Saved;