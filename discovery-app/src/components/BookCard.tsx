import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface BookProps {
  id: string;
  title: string;
  author: string;
  image: string;
}

const BookCard: React.FC<BookProps> = ({ id, title, author, image }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.05)" },
        boxShadow: 5,
        borderRadius: "10px",
      }}
    >
      <CardMedia component="img" height="300" image={image} alt={title} sx={{ objectFit: "cover" }} />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
