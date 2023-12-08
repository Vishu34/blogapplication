"use client"


import { Box, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profilemenu =({menu ,setmenu})=>{


   
    const handleClose=()=>{
setmenu(false)
    }

    const handlelogout=()=>{
        toast.success("successfully logout", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000, // 3000 milliseconds = 3 seconds
            onClose:()=>{setTimeout(() => {
                window.location.reload();
              }, 1000); // Refresh after 1 second
            }
        })
            
           
        document.cookie=`tokenvishu=; expires=1000; path=/`
        
    }
    return (
        <>
         <ToastContainer />
 <Box
        
        onClose={handleClose}
       
      className="absolute top-8 right-8 bg-white">
        <MenuItem onClick={handleClose} className="text-gray-500 text-xs hover:bg-gray-200">
        <Link href="/profile">Profile</Link></MenuItem>
       
        <MenuItem onClick={handleClose} className="text-gray-500 text-xs hover:bg-gray-200"> 
        <Link href={`/setting/edit-profile`}>

        Settings

        </Link>  
      
        </MenuItem>
        <MenuItem onClick={handleClose} className="text-gray-500 text-xs hover:bg-gray-200 flex flex-col items-start">
            <div className="text-black" onClick={handlelogout}>Logout</div>
            <div>@user</div>
        </MenuItem>
      </Box>
        </>
    )
}

export default Profilemenu;