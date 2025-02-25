const express = require("express");
const {
  getBooks,
  getBookById,
  searchBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getBooks); 
router.get("/:id", getBookById); 
router.get("/search", searchBooks); 

// Admin routes
router.post("/", protect, adminOnly, addBook);
router.put("/:id", protect, adminOnly, updateBook);
router.delete("/:id", protect, adminOnly, deleteBook);

module.exports = router;
