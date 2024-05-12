import { RefModel } from "./ref.model.js";

class RefService {
    #_refModel;

    constructor() {
        this.#_refModel = new RefModel();
    }

    async getAll() {
        const data = await this.#_refModel.getAll();
        return data;
    }

    async myReferals({referalid}){
        const data = await this.#_refModel.myReferals({referalid});
        return data;
    }
    async refsignUp({referalid,userid}){
        const data = await this.#_refModel.refsignUp({referalid,userid});
        return data;
    }

    async myRefuser(referalid){
        const data = await this.#_refModel.myRefuser(referalid);
        return data;
    }




}

export default new RefService();
