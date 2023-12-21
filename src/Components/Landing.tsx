import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "../../public/Capture.jpg"

const Landing = () => {
  return (
    <Stack direction={"row"} sx={{width:"80vw"}}>
      <Stack sx={{ flex: 1.5, bgcolor: "white"}}>
        <Box sx={{p:2}}>
          <Stack spacing={2} >
            <Typography
              variant="h4"
              sx={{
                background: "linear-gradient(to right, #28557b, white)",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight:"bold"
              }}
            >
              EXAMS TIME
            </Typography>
            <Typography variant="body2" color="initial">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo doloribus molestiae tenetur rerum nostrum dolorum aperiam quisquam itaque maxime. 
            </Typography>
            <Typography variant="h6" sx={{
              background:"linear-gradient(to right, #777,#bbb)",
              WebkitTextFillColor:"transparent",
              backgroundClip:"text"
            }} color="#aaa" fontStyle={"italic"}>
              "Nothing Happens Until Somethin Moves" , Albert Einstein
            </Typography>
            <Button
            variant={"contained"}
            sx={{
              backgroundColor:"#63c9c6",
              maxWidth:"40%",
              padding:"0.5rem",
              color:"white",
              "&:hover":{
                backgroundColor:"#63c9c6",
              }
            }}>
              View Exam Tips
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Stack sx={{ flex: 1, bgcolor: "white" }}>
        <Box sx={{p:2}}>
             <img width={"100%"} src={Image} alt="pic" /> 
        </Box>
      </Stack>
    </Stack>
  );
};

export default Landing;
