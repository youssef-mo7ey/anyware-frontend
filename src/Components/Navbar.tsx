import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { Badge } from "@mui/material";
const Navbar = (props: any) => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "white", p: "0.5rem" }}
      >
        <Toolbar>
          <Typography flexGrow={1} variant="h4" color="black" component="div">
            Welcome, Student
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box>
              <TextField
                placeholder="search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CiSearch />
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: "50px",
                    height: "2.5rem",
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex",gap:"0.5rem", alignItems: "center" }}>
              <IconButton size="large">
                <Badge badgeContent={4} color="primary">
                  <IoMdNotifications  />
                </Badge>
              </IconButton>
              <IconButton size="large">
                <Badge badgeContent={2} color="primary">
                  <FaEnvelope />
                </Badge>
              </IconButton>
              <Button
                onClick={props.handleLogging}
                variant="contained"
                size="small"
                color="error"
              >
                logOut
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
