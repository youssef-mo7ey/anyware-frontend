import requireAuth from '../../HOC/requireAuth'
import Navbar from "../../Components/Navbar"
import { Box, Stack } from '@mui/material'
import Landing from '../../Components/Landing'
import Announcements from '../../Components/Announcements'
import Quiz from '../../Components/Quiz'

const Dashboard = () => {
    const handleLogOut =()=>{
        window.location.href="/"
        window.localStorage.setItem("logged","false")
    }
 
    return (
    <Box sx={{flex:"4"}}>
        <Stack alignItems={"center"} spacing={4}>
            <Navbar handleLogging={handleLogOut}/>
            <Stack spacing={1}>
                <Landing/>
                <Stack sx={{width:"80vw"}} direction={"row"} spacing={1}>
                    <Announcements/>
                    <Quiz/>
                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default requireAuth(Dashboard)