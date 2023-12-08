"use client"

import { GppBad } from "@mui/icons-material"
import { Box, Button, Input, Typography } from "@mui/material"

import { useState } from "react"



const Commentpage=({setcomment})=>{

    const [commenttxt , settxt]=useState("")


    const handlechange=(event)=>{
        settxt(event.target.value)
    }

console.log(commenttxt)

const handlecomment=()=>{

}
    return(
        <>

<Box>
<div className="flex justify-between text-sm p-5">

<Box className=" ">
     <Typography className="text-xs font-bold"> Comments</Typography>
     <Typography sx={{fontSize:8}} className=" ">The Brightest Stars  in the Darkest Sky</Typography>
</Box>
           
           <Box>
           <GppBad onClick={()=>setcomment(false)}
            onClose={()=>setcomment(false)}
           className="cursor-pointer"/>
           </Box>
           

           
           </div>

         <Box className="p-5 space-y-4">
         <textarea type="text" placeholder="leave here" className="w-[100%] px-2"
            value={commenttxt} onChange={handlechange}
         />

         <Button  sx={{
            fontSize:8
         }} className=" text-white bg-black hover:text-black hover:bg-gray-300 rounded-full"
         onClick={handlecomment}> Comment</Button>

         <Box>
             {commenttxt}
         </Box>
         </Box>
</Box>
        </>
    )
}

export default Commentpage