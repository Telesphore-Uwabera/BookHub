const mongoose = require("mongoose");
const Book = require("./src/models/Book");
require("dotenv").config();
const connectDB = require("./src/config/db");

// Real book data with valid image URLs
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationDate: "1925-04-10",
    rating: 4.3,
    image: "https://covers.openlibrary.org/b/id/8225261-L.jpg", 
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publicationDate: "1949-06-08",
    rating: 4.7,
    image: "https://images-na.ssl-images-amazon.com/images/P/0451524934.jpg", 
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationDate: "1960-07-11",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/id/8225631-L.jpg", 
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationDate: "1813-01-28",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/id/8231854-L.jpg", 
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "1937-09-21",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/id/8305834-L.jpg", 
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    publicationDate: "2003-03-18",
    rating: 4.2,
    image: "https://covers.openlibrary.org/b/id/8244170-L.jpg", 
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publicationDate: "1851-10-18",
    rating: 4.0,
    image: "https://covers.openlibrary.org/b/id/8234218-L.jpg", 
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    publicationDate: "1869-01-01",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/id/8234712-L.jpg", 
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Gothic Horror",
    publicationDate: "1818-01-01",
    rating: 4.3,
    image: "https://covers.openlibrary.org/b/id/8225528-L.jpg", 
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    publicationDate: "1977-01-28",
    rating: 4.6,
    image: "https://images-na.ssl-images-amazon.com/images/P/0307743659.jpg", 
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    publicationDate: "1932-08-01",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/id/8231893-L.jpg", 
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "1954-07-29",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/id/8232157-L.jpg", 
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    publicationDate: "1866-01-01",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/id/8232190-L.jpg", 
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    publicationDate: "1897-05-26",
    rating: 4.4,
    image: "https://covers.openlibrary.org/b/id/8232331-L.jpg", 
  },
];

// Function to seed books into MongoDB
const seedBooks = async () => {
  try {
    console.log("🔄 Connecting to Database...");
    await connectDB();

    console.log("⚠️ Deleting existing books...");
    await Book.deleteMany();

    console.log("📚 Inserting new books...");
    await Book.insertMany(books);

    console.log("✅ Books seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding books:", error);
    process.exit(1);
  }
};

// Run the seeding function
seedBooks();
