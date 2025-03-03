import express from "express";
import { addUserController, loginController } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", addUserController);
userRouter.post("/signin", loginController)


export default userRouter;