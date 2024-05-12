import { PostgresModel } from "../../db/db.js";

export class RefModel {
  #db;
  constructor() {
    this.#db = new PostgresModel();
  }

  async getAll() {
    const data = await this.#db.fetch(`SELECT * FROM referals`);
    return data;
  }

  async myReferals({ referalid }) {
    const data = await this.#db.fetch(
      `
            SELECT * FROM referals WHERE referalid = $1 
        `,
      referalid
    );

    return data;
  }
  async refsignUp({ referalid, userid }) {
    const data = await this.#db.fetch(
      `
        INSERT INTO referals (referalid,userid) VALUES ($1, $2)
        `,
      referalid,
      userid
    );
    return data;
  }

  async myRefuser(referalid) {
    const data = await this.#db.fetch(
      `
      SELECT 
      login.id,
      login.name,
      login.surname,
      login.status,
      login.balance
  FROM 
      login
  JOIN 
      referals ON login.id = referals.userid
  WHERE 
      referals.referalid = $1;
  
        `,
      referalid
    );

    return data;
  }
 


}

export default new RefModel();
