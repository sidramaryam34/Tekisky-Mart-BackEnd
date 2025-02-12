import { createPreOrder } from "../services/PreOrder.js";
import preOrderModel from "../models/preOrdermodel.js";

export let preOrdercon= async(req,res) =>{
    console.log(req.body);
    try {
        let status= await createPreOrder(req.body)
        if(status=="success")
            res.status(200).send("Pre-Ordered Successfull")
        else
        res.status(400).send('Pre-Order Unsuccessfull')
    } catch (error) {
        console.log('server error')
    }
}

export const getPreOrder = async (req, res) => {
    try {
        const preOrders = await preOrderModel.find(); 
        res.status(200).json(preOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching preorders', error: error.message });
    }
};

export const updatePreOrder = async (req, res) => {
    try {
        const updatedPreOrder = await preOrderModel.findByIdAndUpdate(req.params.id, { name: req.body.name },{new:true});

        if (!updatedPreOrder) return res.status(404).json({ message: 'Preorder not found' });

        res.json(updatedPreOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const deletePreOrder = async (req, res) => {
    try {
        const deletedPreOrder = await   preOrderModel.findByIdAndDelete(req.params.id);

        if (!deletedPreOrder) return res.status(404).json({ message: 'Preorder not found' });

        res.json({ message: 'Preorder deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};