import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar';
import './App.css'
import { Stack } from '@mui/material';

function App() {

  const Layout = ()=>{
    return(
      <div className=''>
        <Sidebar/>
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
  ]);


  return (
    <Stack direction={"row"} sx={{bgcolor:"#f2f2f2"}}>
      <Layout/> 
      <RouterProvider router={router} />  
    </Stack>
  )
}

export default App
