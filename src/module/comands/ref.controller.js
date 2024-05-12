import RefService from "./ref.service.js";
class RefController{


    async getAll(req,res){
        const data = await RefService.getAll()
        res.status(200).json(data)
    }

    async myReferals(req, res){
        const {referalid} = req.body;
        const data = await RefService.myReferals({referalid})
        res.status(200).json(data)
        
    }
    async refsignUp(req, res){
        const {referalid,userid} = req.body
        const data = await RefService.refsignUp({referalid,userid})
        res.status(200).json(data)
    }
    async myRefuser(req,res){
        const {referalid} = req.body
        const data = await RefService.myRefuser(referalid)
        res.status(200).json(data)
    }



   

}

export default new RefController();
