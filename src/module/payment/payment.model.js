import { PostgresModel } from "../../db/db.js";

export class PayModel {
    #db
    constructor() {
        this.#db = new PostgresModel()
    }

    async getAll(){
        const data = await this.#db.fetch(`SELECT * FROM pay`)
        return data
    }

    async pay(userid,method,amount,tousd){
        const data = await this.#db.fetch(`INSERT INTO pay (userid,method,amount,tousd) VALUES ($1,$2,$3,$4) RETURNING id`,userid,method,amount,tousd)
        return data}

        async mypayments(userid){
            const data = await this.#db.fetch(`SELECT * FROM pay WHERE userid = $1`,userid)
            return data
        }

        async mypatch(id,userid,status){
            const data = await this.#db.fetch(`UPDATE pay SET status = $1 WHERE id = $2 AND userid = $3 RETURNING id`,status,id,userid)
            return data
        }

        async getOne(id){
            const data = await this.#db.fetch(`SELECT * FROM pay WHERE id = $1`,id)
            return data
        }

        async setbalance(amount,userid){
            const data = await this.#db.fetch(`UPDATE login SET balance = balance + $1 WHERE id = $2 RETURNING balance`,amount,userid)
            return data
        }

        async allwithdraw(){
            const data = await this.#db.fetch(`SELECT * FROM withdrawal`)
            return data
        }
        async mywithdraw(userid){
            const data = await this.#db.fetch(`SELECT * FROM withdrawal WHERE userid = $1`,userid)
            return data
        }

        async withdraw(userid,method,amount,address ){
            const data = await this.#db.fetch(`INSERT INTO withdrawal (userid,method,amount,address) VALUES ($1,$2,$3,$4) RETURNING id`,userid,method,amount,address)
            return data
        }

        async dataminus(userid,amount){
            const data = await this.#db.fetch(`UPDATE login SET balance = balance - $1 WHERE id = $2 RETURNING balance`,amount,userid)
            return data
        }




}

export default new PayModel();
