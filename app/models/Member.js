import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: String,
  bio: String,
  photoUrl: String,
  createdAt: { type: Date, default: Date.now },
  createdByInvite: { type: Boolean, default: false }
});

export default mongoose.models.Member || mongoose.model("Member", MemberSchema);
