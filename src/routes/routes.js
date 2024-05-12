import { Router } from "express";
import  {authRoutes}  from "../module/auth/auth.routes.js";
import  {referalRoutes}  from "../module/comands/ref.routes.js";
import  {shopsRouter}  from "../module/shop/shop.routes.js";
import  {payRoutes}  from "../module/payment/payment.routes.js";

export const routes = Router()
     .use('/auth',authRoutes)
     .use('/referal',referalRoutes)
     .use('/shops',shopsRouter)
     .use('/payment',payRoutes)
