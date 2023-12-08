"use client";

import {  UseBloggetContext } from "@/components/Context/Blogget/page";
import { NotificationAdd } from "@mui/icons-material";
import { Box, Button, Container, Input } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import styled from "styled-components";
import Profilemenu from "./menu/page";
import { UseProfileContext } from "@/components/Context/UserprofileContext/page";

const Section = styled(Box)``;



const Desktop = () => {

  



  const { search, setsearch,authors } = UseBloggetContext();
  const {userdata}=UseProfileContext()
 
  

  const {profilepic}= userdata
 

  const [menu, setmenu] = useState(false);
 
  const handleclick = () => {
    setmenu(!menu);
  };

 


 
  
  const [userlogin ,setlogin]=useState("")

  useEffect(()=>{
    let token1 = document.cookie
    .split("; ")
    .find((row) => row.startsWith("tokenvishu="))
    ?.split("=")[1];
   
   setlogin(token1)
  },[userlogin])


  
  return (
    <>
      <Section className="bg-gray-100 d-none drop-shadow-lg">
        <Box
          className=" flex space-x-4 justify-between items-center 
          py-3 md:mx-5 lg:mx-16"
        >
          <Box className="flex space-x-4 items-center">
            <Image
              src="https://i.pinimg.com/1200x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
              alt=""
              className="w-8 h-8"
              width={100}
              height={10}
            />
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              placeholder="search"
              
              className="px-4 bg-white rounded-full py-2 text-sm text-black hover:border-2 border-2 hover:border-blue-200 curser-pointer outline-none drop-shadow-xl"
            />
          </Box>

          <Box>
            <ul className="flex space-x-4 items-center">
              <li>
                <Button
                  sx={{
                    fontSize: 8,
                  }}
                  className="bg-white px-4 py-2 font-medium text-black rounded-full drop-shadow-xl"
                >
                  <Link href="/publish"> Write</Link>
                </Button>
              </li>

              
              {userlogin ? ( <>
                  <li className="bg-white w-7 h-7 rounded-full text-center">
                    
                    <NotificationAdd
                      sx={{
                        fontSize: "medium",
                      }}
                    />
                  </li>

                  <li className="relative">
                    
                    {
                    authors?.profilepic ==[] || profilepic ==[] ? (
                        <>
                        <img
                      src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                      alt="imag"
                     
                      className="w-7 h-7 rounded-full"
                      onClick={handleclick}
                      
                    />
                        </>
                      ) : (
                        <>
                        <img
                      src={profilepic}
                      alt="imag"
                      
                      className="w-7 h-7 rounded-full"
                      onClick={handleclick}
                      
                    />
                        </>
                      )
                    }
                   
                   {
                    menu && (
                      <>
                      <Profilemenu menu={menu} setmenu={setmenu} />
                      </>
                    )
                   }
                  </li>
                </>)
              :
                (<>
                  <Link href="/signin">
                    <li>
                      <Button
                        sx={{
                          fontSize: 8,
                        }}
                        className="bg-black text-white px-4 py-2 font-medium  rounded-full hover:bg-black hover:text-white drop-shadow-xl"
                      >
                        Sign In
                      </Button>
                    </li>
                  </Link>

                  <Link href="/signup">
                    <li>
                      <Button
                        sx={{
                          fontSize: 8,
                        }}
                        className="bg-white px-4 py-2 font-medium text-black rounded-full hover:bg-black hover:text-white drop-shadow-xl"
                      >
                        Sign Up
                      </Button>
                    </li>
                  </Link>
                </>)
              }
            </ul>
          </Box>
        </Box>
      </Section>
    </>
  );
};

export default Desktop;
