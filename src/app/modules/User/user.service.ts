import { Request, Response } from "express";
import { User } from "./user.model";

const getAllUsers =async()=>{
    const users = await User.find().select("-password");

    return users;
}

const getUserById =async(id:string)=>{
    const user = await User.findById(id).select("-password");

    return user;
}

const makeAdmin = async(id:string)=>{
    const user = await User.findByIdAndUpdate(id, { role: "ADMIN" }, { new: true });
    return user;
}

export const UserService = {
    getAllUsers,
    getUserById,
    makeAdmin
}