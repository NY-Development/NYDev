import mongoose from "mongoose";

const SocialLinksSchema = new mongoose.Schema(
  {
    linkedin: String,
    github: String,
    instagram: String,
    youtube: String,
    x: String,
    facebook: String,
    telegram: String,
    website: String,
  },
  { _id: false }
);

const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      sparse: true, // allows invited members without email conflicts
    },

    role: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      maxlength: 500,
    },

    photoUrl: {
      type: String,
    },

    links: {
      type: SocialLinksSchema,
      default: {},
    },

    createdByInvite: {
      type: Boolean,
      default: false,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Member ||
  mongoose.model("Member", MemberSchema);
