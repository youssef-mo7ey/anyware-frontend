import { Box, Button, Typography } from "@mui/material";
import requireAuth from "../../HOC/requireAuth";

const Homepage = () => {
  const handleLogIn = () => {
    window.location.href = "/dashboard";
    window.localStorage.setItem("logged", "true");
  };
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box p={2} display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography fontWeight={"bold"} variant="h6" color="initial">
          Homepage
        </Typography>
        <Typography variant="body1" color="#aaa">
          login to show dashboard
        </Typography>
      </Box>
      <Button color="primary" variant="contained" onClick={handleLogIn}>
        Login
      </Button>
    </Box>
  );
};

export default requireAuth(Homepage);
