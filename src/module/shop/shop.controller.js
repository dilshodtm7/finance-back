import ShopService from "./shop.service.js";
class ShopController{

    async getAll(req,res){
        const data = await ShopService.getAll()
        res.status(200).json(data)
    }

    async allshops(req,res){
        const data = await ShopService.allshops()
        res.status(200).json(data)
    }
    async myminingbalance(req,res){
        const {userid} = req.body
        const data = await ShopService.myminingbalance(userid)
        res.status(200).json(data)
    }


    async post(req,res){
        const {names,sale ,inday ,forref,allref} = req.body
        const data = await ShopService.post({names,sale,inday,forref,allref})
        res.status(200).json(data)
    }

    async myshop(req, res) {
        const {userid}=req.body
        const data = await ShopService.myshop(userid )
        res.status(200).json(data)
    }

    async newshop(req, res) {
        const {userid,shopid}=req.body
        const data = await ShopService.newshop(userid,shopid)
        res.status(200).json(data)
    }



   

}

export default new ShopController();
