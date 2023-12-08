

"use client"

import { UseBloggetContext } from "@/components/Context/Blogget/page"
import { UseProfileContext } from "@/components/Context/UserprofileContext/page"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
import axios from "axios"

import { useState } from "react"


const LikeandDislike =({blogid})=>{

  const {setblogdata}=UseBloggetContext()
  const {userinfo}=UseProfileContext()

 console.log(userinfo._id)
 console.log(blogid)

 
    const [like,setlike]=useState(false)

    const handlelike=async(blogid)=>{

     
      
     
    
    try {
      const res = await axios.put(
        `http://localhost:13000/updateLikes/${blogid}`, 
        userinfo)
      
   
        

      if (res.status === 202) {
       
        const {message, data }= await res.data;
       
         setlike(!like)
        console.log(data);
     
        
         
          
      } else {
       console.log("data nahi")
      }
    } catch (e) {
      console.error(e);
    }


    }
    return (
        <>
 {
                      like ?
                      <Favorite
                        sx={{
                          fontSize: "medium",
                          color:"red"
                        }}
                      onClick={()=>{handlelike(blogid)}}/> :
                       <FavoriteBorder
                        sx={{
                          fontSize: "medium",
                        }}
                      onClick={()=>{handlelike(blogid)}}/>
                     }
        </>
    )
}


export default LikeandDislike