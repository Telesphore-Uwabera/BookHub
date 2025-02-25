import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { Book } from "../types"; 

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null); 

  useEffect(() => {
    getBooks().then((books: Book[]) => {
      const foundBook = books.find((b) => b.id === id) || null;
      setBook(foundBook);
    });
  }, [id]);

  return book ? (
    <h1>
      {book.title} - {book.author}
    </h1>
  ) : (
    <h1>Loading...</h1>
  );
};

export default BookDetail;
