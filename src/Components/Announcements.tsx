import { Avatar, Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UserAvatar from "../../public/download.png"
import useFetch from "../Hooks/useFetch";

interface AnnouncementItem {
  _id: string;
  title: string;
  author: string;
  body: string;
}

const Announcements = () => {
  const [announcement, setAnnouncement] = useState<AnnouncementItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/announcement`);
        if (response.ok) {
          const data = await response.json();
          setAnnouncement(data);
        } else {
          throw new Error("failed");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Box sx={{ flex: "3", height:"fit-content" ,bgcolor: "white", p: 2 }}>

      <Typography variant="h6" color="initial">
        Annoncements
      </Typography>
      <List sx={{ width: "100%" }} component="nav">
        {announcement.map((elem) => {
          return (
            <Stack
              key={elem._id}
              direction={"row"}
              spacing={2}
              sx={{
              }}
            >
            <Stack  sx={{p:2}}>
              <Stack flexDirection={"row"} alignItems={"center"}  justifyContent={"space-between"}>
                <Avatar sx={{marginRight:"1rem"}} alt="Avatar" src={UserAvatar} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000",
                      whiteSpace: "nowrap",
                      fontWeight:"bold"
                    }}
                  >{elem.author}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#aaa",
                      whiteSpace: "nowrap",
                      
                    }}
                  >{elem.title}</Typography>
                </Box>
              </Stack>

            </Stack>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >{`${elem.body}`}</Typography>
            </Stack>
          );
        })}
      </List>
    </Box>
  );
};

export default Announcements;
