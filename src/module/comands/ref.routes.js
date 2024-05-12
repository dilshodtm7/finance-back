import { Router } from "express";
import RefController from "./ref.controller.js";

export const referalRoutes = Router()
    .get('/all',RefController.getAll)
    .post('/myReferals',RefController.myReferals)
    .post('/myReferalUsers',RefController.myRefuser)
    .post('/sign-up',RefController.refsignUp)
    