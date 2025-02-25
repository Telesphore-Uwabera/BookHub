import { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { BookContext } from "../context/BookContext";

const SearchBar = () => {
  const bookContext = useContext(BookContext);
  const [tempQuery, setTempQuery] = useState("");

  if (!bookContext) return null;

  const handleSearch = () => {
    bookContext.setSearchQuery(tempQuery);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3, mb: 3 }}>
      <TextField
        variant="outlined"
        placeholder="Search books..."
        sx={{ backgroundColor: "white", borderRadius: 1, minWidth: 300 }}
        value={tempQuery}
        onChange={(e) => setTempQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
