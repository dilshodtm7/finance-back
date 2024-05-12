import { Router } from "express";
import PayController from "./payment.controller.js";

export const payRoutes = Router()
    .get('/allpayments',PayController.getAll)
    .post('/pay',PayController.pay)
    .post('/mypayments',PayController.mypayments)
    .patch('/mypayments',PayController.mypatch)
    .get('/withdraw',PayController.allwithdraw)
    .post('/withdraw',PayController.withdraw)
    .post('/mywithrdraw',PayController.mywithdraw)

    