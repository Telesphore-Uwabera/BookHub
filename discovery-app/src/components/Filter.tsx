import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import CustomButton from "./CustomButton";

const Filter = () => {
  const bookContext = useContext(BookContext);
  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("");

  if (!bookContext) return null;

  // Handle genre selection
  const handleGenreChange = (event: any) => {
    const selectedGenre = event.target.value;
    setGenre(selectedGenre);
    bookContext.setGenre(selectedGenre === "" ? null : selectedGenre); 
  };

  // Handle sorting selection
  const handleSortChange = (event: any) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);
    bookContext.setSortBy(selectedSort);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", padding: "10px" }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Genre</InputLabel>
        <Select value={genre} onChange={handleGenreChange}>
          <MenuItem value="">All Genres</MenuItem>
          <MenuItem value="Classic">Classic</MenuItem>
          <MenuItem value="Dystopian">Dystopian</MenuItem>
          <MenuItem value="Fiction">Fiction</MenuItem>
          <MenuItem value="Science Fiction">Science Fiction</MenuItem>
          <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Science">Science</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={handleSortChange}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>

      <CustomButton text="Apply Filters" />
    </Box>
  );
};

export default Filter;
