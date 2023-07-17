//import th model

const Todo=require("../models/Todo")

//Route handler

 

exports.createTodo=async(req,res)=>{
     try{
          //title and desc from the body
          const{title,description}=req.body;
          //creaye new todo object ansd insert in db

          const response=await Todo.create({title,description})


          //send json res
              
          res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created succesfully"
          })
            
           
     }catch(err){
         console.error(err)
         console.log(err);
         res.status(500).json({
            success:false,
            data:"Interns server error",
            message:err.message
         })
     }
}