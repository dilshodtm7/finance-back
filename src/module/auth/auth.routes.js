import { Router } from "express";
import LoginController from "./auth.controller.js";

export const authRoutes = Router()
    .get('/login',LoginController.getAll)
    .post('/checkout',LoginController.checkEmail)
    .post('/sign-up',LoginController.signUp)
    .post('/sign-in',LoginController.signIn)
    .patch('/login',LoginController.updateUser)
    .patch('/loginbalance',LoginController.updateUserBalance)
    // .patch('/userbalance',LoginController.updateUser)
    // .patch('/userstatus',LoginController.updateUser)
    