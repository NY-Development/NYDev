import mongoose from "mongoose";

const InviteTokenSchema = new mongoose.Schema({
  email: String,           // email invited
  token: String,           // random token
  expiresAt: Date,
  used: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.InviteToken || mongoose.model("InviteToken", InviteTokenSchema);
