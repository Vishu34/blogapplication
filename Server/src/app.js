



const http = require('http');
const express = require('express');
const socketIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port= 13000

require('../src/Db/conn')
const UserRouter = require("./Route/UserRoute")
const BlogRouter= require("./Route/BlogRoute")

app.use(express.json())

app.use(express.urlencoded({extended:false}))
const cors=require('cors')
app.use(cors())

app.use(cors({
    origin: '*',
    credentials: true
  }));
  app.use("/", UserRouter)
  app.use("/", BlogRouter)
 

server.listen(port, (req,res)=>{
 
    console.log(`server is running on the port ${port}`)
})