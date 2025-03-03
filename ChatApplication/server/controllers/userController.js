import bcrypt, { compareSync } from "bcrypt";
import User from "../models/User.js";
import { GenerateToken } from "../config/Token.js";

export const addUserController =async (req, res) => {
    const {username, email, password} = req.body
   try {
    if(!username || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    if(password.length < 7){
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters"
        })
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }

    const existingUserName = await User.findOne({username});
    if(existingUserName){
        return res.status(400).json({
            success: false,
            message: "Username already exists please choose another username"
        })    
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = new User({
        username: username.trim().replace(/\s+/g, ' '),
        email,
        password: hashedPassword
    });

    const savedUser = await user.save();
    if(savedUser.errors){
        return res.status(400).json({
            success: false,
            message: "User not created"
        })
    }else{

    
    const token = GenerateToken({data: savedUser, expiresIn: "1d"});
    return res.status(201).json({
        success: true,
        message: "User created successfully",
        token,
        data: savedUser
    })
}
    
   } catch (error) {
    return res.status(500).json({
        success: false,
        message: "Something went wrong"
    })
   }
};

//Login User

export const loginController = async (req, res)=>{
    const {email, password} = req.body;
    try {
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message:"All fields are required"
            })
        }

        const user = await User.findOne({email: email});
        if(user){
            const isValid = compareSync(password, user.password);
            if(user.email === email && isValid){
                user.password = undefined
                const token = GenerateToken({ data: user, expiresIn: '24h' });
                res.cookie("token", token, { httpOnly: true });
                return res.status(200).json({
                    success: true,
                    message:"Login Successful",
                    token,
                    data: user
                })

            }else{
                return res
                .status(500)
                .send(sendError({ success: false, message: "User email or password is invalid"}));
            }
        }else{
            return res.status(403).json({
                success: false,
                message:"User not found"
            })
        }

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Error",
            error: error
        })
    }
}