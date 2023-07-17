const express=require("express")

const app=express();

//load config from env

require("dotenv").config();

const PORT=process.env.PORT || 4000

//middleware to parse json req to body

  app.use(express.json())

  //import route

   const todoRoute=require("./routes/todos")
//mount the todo Api rout

app.use("/api/v1",todoRoute)

//start server

app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`);
} )

//connect to db

const dbConnect=require("./config/database")
dbConnect();
 

//default route

app.get("/",(req,res)=>{
res.send(`<h1>This is HOMEPAGE</h1>`)
})