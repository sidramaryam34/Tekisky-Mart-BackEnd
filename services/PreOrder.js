import preOrderModel from "../models/preOrdermodel.js";

export let createPreOrder=async(data)=>{
    try {
        let s1=new preOrderModel(data)
        let result=await  s1.save()
        return "success"
    } catch (error) {
        return "error"
    }
}