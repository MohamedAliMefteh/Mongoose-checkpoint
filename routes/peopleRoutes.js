const express=require("express")
const router=express.Router()
const Person=require("../models/people")


router.post("/users",async(req,res)=>{
    try{
        const newPerson= new Person(req.body)
        await newPerson.save()
        res.status(200).json({msg:"success",newPerson})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
})
router.get("/users",async(req,res)=>{
    try{
        const newPerson =await Person.find()
        
        res.status(200).json({msg:"find data", newPerson})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
})
module.exports=router