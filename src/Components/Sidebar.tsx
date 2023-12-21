import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { sidebarDeatilsArray } from "../config/sidebarDetails";

const Sidebar = () => {
  return (
    <Stack
      position={"sticky"}
      alignItems={"center"}
      sx={{
        flex: "1",
        top:0,
        color: "white",
        maxWidth:340,
        background: "linear-gradient(to bottom, #28557b, #3d7f95)",
        height:"100vh"
      }}
    >
      <Typography p={4} variant="h4">
        Coligo
      </Typography>

      <List sx={{ width: "100%", maxWidth: 360 }} component="nav">
        {sidebarDeatilsArray.map((elem,i) => {
          const Icon = elem.icon;
          return (
            <ListItemButton
              key={i}
              component="a"
              href={`${elem.url}`}
              className="group"
              sx={{
                "&:hover": {
                  bgcolor: "white",
                },
                "&:hover h6": {
                  background:
                    "linear-gradient(to right, #28557b, #3d7f95)",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                },
              }}
            >
              <ListItemIcon>
                <Icon className="text-white group-hover:text-[#3d7f95] text-3xl" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#FFFFFF",
                      
                    }}
                  >{`${elem.name}`}</Typography>
                }
              />
            </ListItemButton>
          );
        })}
      </List>
    </Stack>
  );
};

export default Sidebar;
