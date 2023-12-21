import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";

interface QuizItem {
  _id:string
  title: string;
  course: string;
  topic: string;
  dueDate: Date;
}
const Quiz = () => {
  const [quiz, setQuiz] = useState<QuizItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/quiz");

        if (res.ok) {
          const data = await res.json();
          setQuiz(data);
        } else {
          throw new Error("Failed");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ flex: "1", height:"fit-content", p: 2, bgcolor: "white" }}>
      <Stack>
        <Box sx={{ p: 1 }}>
          <Typography variant="h6" fontWeight={"bold"} color="initial">
            What's Due
          </Typography>
          <Typography variant="body2" color="#aaa">
            Exam dues
          </Typography>
        </Box>

        <Stack>
          {quiz.map((elem) => {
            const date= new Date(elem.dueDate)
            return (
              <Card key={elem._id} sx={{boxShadow:"none"}}>
                <CardContent>
                  <Typography
                    variant="h6"
                    color="initial"
                    sx={{ display: "flex", alignItems: "center", textTransform:"capitalize" }}
                  >
                    <GiSandsOfTime className="text-[#64cabe] font-bold text-2xl" />{" "}
                    {elem.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#aaa", paddingBlock: 0.5, textTransform:"capitalize" }}
                    component="div"
                  >
                    Course: {elem.course}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#aaa", paddingBlock: 0.5, textTransform:"capitalize" }}
                    component="div"
                  >
                    Topic: {elem.topic}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#aaa", paddingBlock: 0.5, textTransform:"capitalize" }}
                    component="div"
                  >
                    Due to: {date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    sx={{
                      display: "flex",
                      bgColor: "#64cabe",
                      borderColor: "#64cabe",
                      color: "#64cabe",
                      width: "100%",
                      textTransform: "capitalize",
                    }}
                  >
                    start quiz
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Quiz;
