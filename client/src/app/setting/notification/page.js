"use client"

import { Box, List, ListItem, Typography } from "@mui/material"

const Notification=()=>{
    return (
        <>
           <Box className="space-y-4  w-[100%] md:w-[85%] p-2">
           <Typography className="text-sm"> Recent Notification</Typography>
             <List className="flex items-center content-center md:w-[30%] space-x-3 text-xs cursor-pointer">
                <ListItem className="hover:bg-gray-200 mx-auto hover:text-black rounded-full bg-black text-white"> All</ListItem>
                <ListItem className="bg-gray-200 mx-auto rounded-full hover:bg-black hover:text-white"> Like</ListItem>
                <ListItem className="bg-gray-200 mx-auto rounded-full hover:bg-black hover:text-white"> Comment</ListItem>
                <ListItem className="bg-gray-200 mx-auto rounded-full hover:bg-black hover:text-white"> Reply</ListItem>
             </List>
           </Box>
        </>
    )
}

export default Notification