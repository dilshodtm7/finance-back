import { PayModel } from "./payment.model.js";

class PayService {
    #_payModel;

    constructor() {
        this.#_payModel = new PayModel();
    }

    async getAll() {
        const data = await this.#_payModel.getAll();
        return data;
    }

    async pay(userid,method,amount,tousd) {
        const data = await this.#_payModel.pay(userid,method,amount,tousd);
        return {
            status:200,
            data:data
        }
    }

    async mypayments(userid){
        const data = await this.#_payModel.mypayments(userid);
        return data;
    }

    async mypatch(id,userid,status){
        const data = await this.#_payModel.mypatch(id,userid,status);
        const getOne = await this.#_payModel.getOne(id)   
        const amount = getOne[0].tousd
        const setbalance = await this.#_payModel.setbalance(amount,userid)
        return {
            status:200,
            data:data
        }



    }

    async allwithdraw(){
        const data = await this.#_payModel.allwithdraw();
        return data;
    }
    async mywithdraw(userid){
        const data = await this.#_payModel.mywithdraw(userid);
        return data;
    }

    async withdraw(userid,method,amount,address){
        const data = await this.#_payModel.withdraw(userid,method,amount,address);
        const minus = await this.#_payModel.dataminus(userid,amount) 
        return {
            status:200,
            message:'Вывод средств в Ожидание',
            data:data
        }
    }


  
}

export default new PayService();
