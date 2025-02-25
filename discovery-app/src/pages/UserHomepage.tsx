import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const UserHomepage = () => {
  const { username } = useParams();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" textAlign="center" sx={{ mt: 5 }}>
        Welcome, {username}!
      </Typography>
      <Typography variant="h5" textAlign="center" sx={{ mt: 2, color: "gray" }}>
        Explore and enjoy reading books.
      </Typography>
    </Container>
  );
};

export default UserHomepage;
