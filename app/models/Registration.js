import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  courseId: String,
  name: String,
  email: String,
  phone: String,
  paymentStatus: { type: String, default: "pending" }, // pending / paid / failed
  //paymentProviderId: String, // payment provider session / tx id
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Registration || mongoose.model("Registration", RegistrationSchema);
