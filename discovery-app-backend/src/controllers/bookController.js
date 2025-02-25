const Book = require("../models/Book");

// Fetch all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Fetch a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Search books by title
exports.searchBooks = async (req, res) => {
  try {
    const { q } = req.query;
    const books = await Book.find({ title: { $regex: q, $options: "i" } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Add a new book (Admin only)
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, rating, image } = req.body;
    const book = new Book({ title, author, genre, publicationDate, rating, image });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to add book", error });
  }
};

// Update a book (Admin only)
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to update book", error });
  }
};

// Delete a book (Admin only)
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete book", error });
  }
};
