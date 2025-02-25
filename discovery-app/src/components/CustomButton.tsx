import { Button } from "@mui/material";

const CustomButton = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{
        padding: "10px 20px",
        fontWeight: "bold",
        borderRadius: "8px",
        textTransform: "none",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: "#0056b3",
          transform: "scale(1.05)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
