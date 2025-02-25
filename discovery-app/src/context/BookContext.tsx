import { createContext, useState, ReactNode } from "react";

export interface BookContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  genre: string;
  setGenre: (genre: string) => void;
  author: string; 
  setAuthor: (author: string) => void;  
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export const BookContext = createContext<BookContextProps | null>(null);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");  
  const [sortBy, setSortBy] = useState("");

  return (
    <BookContext.Provider value={{ 
      searchQuery, setSearchQuery, 
      genre, setGenre, 
      author, setAuthor,  
      sortBy, setSortBy 
    }}>
      {children}
    </BookContext.Provider>
  );
};
