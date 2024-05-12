import { Router } from "express";
import ShopController from "./shop.controller.js";

export const shopsRouter = Router()
 .get('/all',ShopController.getAll)
 .get('/allshops',ShopController.allshops)
 .post('/post',ShopController.post)
 .post('/myshop',ShopController.myshop)
 .post('/newshop',ShopController.newshop)
 .post('/myminingandbalance',ShopController.myminingbalance)
    