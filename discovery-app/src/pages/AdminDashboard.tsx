import { useEffect, useState } from "react";
import { getBooks, addBook, deleteBook } from "../services/bookService";

const AdminDashboard = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    rating: "",
    image: "",
  });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error loading books:", error);
    }
  };

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBook(newBook);
      setNewBook({ title: "", author: "", genre: "", publicationDate: "", rating: "", image: "" });
      loadBooks(); 
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await deleteBook(id);
      loadBooks(); 
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Add Book Form */}
      <form onSubmit={handleAddBook}>
        <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} required />
        <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} required />
        <input type="text" placeholder="Genre" value={newBook.genre} onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })} required />
        <input type="date" placeholder="Publication Date" value={newBook.publicationDate} onChange={(e) => setNewBook({ ...newBook, publicationDate: e.target.value })} />
        <input type="number" placeholder="Rating" value={newBook.rating} onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })} />
        <input type="text" placeholder="Image URL" value={newBook.image} onChange={(e) => setNewBook({ ...newBook, image: e.target.value })} />
        <button type="submit">Add Book</button>
      </form>

      {/* Book List with Delete Option */}
      <h3>Books List</h3>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
            <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
