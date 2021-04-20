import React, { useState } from "react";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";

import BookCard from "../components/BookCard";


function Search() {
    // Setting our component's initial state
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      setQuery(event.target.value);
    }
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      API.getBooks(query)
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  
    function saveBook(id) {
      const book = books.find((book) => book.id === id);
      // if no author
      if (book.volumeInfo.authors === undefined) {
        book.volumeInfo.authors = ["Unknown author"];
      }
      //if no image assigned
      if (typeof(book.volumeInfo.imageLinks) === "undefined") {
        let val = `${process.env.PUBLIC_URL + "/icons/image-not-found.png"}`;
        book.volumeInfo.imageLinks = { thumbnail: val };
        }
  
        API.saveBook({
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        authors: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.infoLink,
      })
        .then((res) => {
         console.log(res); 
        })
        .catch((err) => console.log(err.response));
    }

    return (
        <div>
          <SearchBar
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
          />
            <div>
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : `${process.env.PUBLIC_URL + "/icons/image-not-found.png"}`
                  }
                  link={book.volumeInfo.infoLink}
                  onClick={() => saveBook(book.id)}
                  label="Save"
                />
              ))}
            </div>
        </div>
      );
}
    
export default Search;
 