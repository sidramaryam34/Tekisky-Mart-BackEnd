import userModel from "../models/userModel.js";


export let createUser=async(data)=>{
    try {
        let s1=new userModel(data)
        let result=await  s1.save()
        return "success"
    } catch (error) {
        return "error"
    }
}

export let getUser=async(email)=>{
     try {
        let user=await userModel.findOne({email})
        return user
     } catch (error) {
        console.log(`error occured in getuser function of services ${error} `);
     }
}