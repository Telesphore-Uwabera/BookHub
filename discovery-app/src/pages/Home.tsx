import { useEffect, useState, useContext } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import { Book } from "../types";
import { BookContext } from "../context/BookContext";
import { getBooks } from "../services/bookService";
import BookCard from "../components/BookCard";
import Filter from "../components/Filter";

const Home = () => {
  const bookContext = useContext(BookContext);
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  // Fetch books from the backend when the component mounts
  useEffect(() => {
    getBooks().then((data: Book[]) => {
      setBooks(data);
      setFilteredBooks(data); 
    });
  }, []);

  useEffect(() => {
    let updatedBooks = [...books]; 

    // Apply search filter
    if (bookContext?.searchQuery) {
      updatedBooks = updatedBooks.filter((book) =>
        book.title.toLowerCase().includes(bookContext.searchQuery.toLowerCase())
      );
    }

    // Apply genre filter (only if a specific genre is selected)
    if (bookContext?.genre && bookContext.genre !== "") {
      updatedBooks = updatedBooks.filter((book) => book.genre === bookContext.genre);
    }

    // Apply sorting logic
    if (bookContext?.sortBy === "title") {
      updatedBooks.sort((a, b) => a.title.localeCompare(b.title)); 
    }

    if (bookContext?.sortBy === "date") {
      updatedBooks.sort(
        (a, b) =>
          new Date(b.publicationDate || "1970-01-01").getTime() -
          new Date(a.publicationDate || "1970-01-01").getTime()
      );
    }

    if (bookContext?.sortBy === "rating") {
      updatedBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0)); 
    }

    setFilteredBooks(updatedBooks); 
  }, [bookContext?.searchQuery, bookContext?.genre, bookContext?.sortBy, books]);

  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Welcome to BookHub 📚
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Explore, Search, and Find Your Favorite Books
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Filter />
        </Grid>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <BookCard id={book.id} title={book.title} author={book.author} image={book.image} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h5" color="textSecondary" textAlign="center">
              No books found. Try changing your filters.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
