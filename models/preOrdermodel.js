import mongoose from "mongoose";

const preOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  productName: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10,15}$/, 'Please enter a valid mobile number']
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const preOrderModel = mongoose.model('PreOrder', preOrderSchema);

export default preOrderModel;