import PayService from "./payment.service.js";
class PayController{


    async getAll(req,res){
        const data = await PayService.getAll()
        res.status(200).json(data)
    }

    async pay(req, res){
        const {userid,method,amount,tousd} = req.body
        const data = await PayService.pay(userid,method,amount,tousd)
        res.status(200).json(data)
    }

    async mypayments(req,res){
        const {userid} = req.body
        const data = await PayService.mypayments(userid)
        res.status(200).json(data)
    }

    async mypatch(req, res){
        const {id,userid,status} = req.body
        const data = await PayService.mypatch(id,userid,status)
        res.status(200).json(data)
    }
    async allwithdraw(req, res){
        const data = await PayService.allwithdraw()
        res.status(200).json(data)
    }
    async mywithdraw(req, res){
        const {userid} = req.body
        const data = await PayService.mywithdraw(userid)
        res.status(200).json(data)
    }
    async withdraw(req, res) {
        console.log(req.body);
        const {userid,method,amount,address} = req.body
        const data = await PayService.withdraw(userid,method,amount,address)
        res.status(200).json(data)
    }
 

}

export default new PayController();
