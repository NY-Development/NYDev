import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    course: String,
    paymentStatus: { type: String, default: "pending" },
    chapaTxRef: String,
  },
  { timestamps: true }
);

export default mongoose.models.Enrollment ||
  mongoose.model("Enrollment", enrollmentSchema);
