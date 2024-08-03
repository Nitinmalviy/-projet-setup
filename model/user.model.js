import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    firsName: {
        type: String,
        required: true,
        lowerCase: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        lowerCase: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isBlock: {
        type: Boolean,
        default: false
    },
    ipAddress: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    profile: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        required: true,
        trim: true,
    },
    refreshToken: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model("user", userShema);

export default User;