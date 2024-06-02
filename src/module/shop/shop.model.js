import { PostgresModel } from "../../db/db.js";

export class ShopModel {
  #db;
  constructor() {
    this.#db = new PostgresModel();
  }

  async getAll() {
    const data = await this.#db.fetch(`SELECT * FROM minings`);
    return data;
  }

  async balance(userid){
    const data = await this.#db.fetch(
      `SELECT
      balance
      FROM
      login where id = $1`,
userid
);
return data;
}  
async sale(shopid){
  const data = await this.#db.fetch(
    `SELECT
    sale
    FROM
    minings where id = $1`,
    shopid
);
return data;
}

async mybalance(userid){
  const data = await this.#db.fetch(
    `SELECT
    balance
    FROM
    login where id = $1`,
    userid)
}


  async myminingbalance(userid){
    const data = await this.#db.fetch(
      `SELECT 
      minings.id,
      myminings.expired,
      minings.names,
      minings.sale,
      minings.inday,
      minings.forref,
      minings.allref,
      login.balance,
      login.status
  FROM 
      minings
  JOIN 
      myminings ON myminings.shopid = minings.id
  JOIN 
      login ON login.id = myminings.userid
  WHERE 
      myminings.userid = $1;`,
      userid
    );
    return data;
  }


  async allshops() {
    const data = await this.#db.fetch(`SELECT * FROM myminings`);
    return data;
  }

  async post({ names, sale, inday, forref, allref }) {
    const data = await this.#db.fetch(
      `INSERT INTO minings (names,sale,inday, forref,allref) VALUES ($1,$2,$3,$4,$5) RETURNING id`,
      names,
      sale,
      inday,
      forref,
      allref
    );
    return data;
  }

  async myshop(userid) {
    const data = await this.#db.fetch(
      ` SELECT 
        minings.id,
        minings.names,
        minings.sale ,
        minings.inday ,
        minings.forref ,
        minings.allref,
        myminings.expired
    FROM 
    minings
    JOIN 
    myminings ON  myminings.shopid = minings.id
    WHERE 
    myminings.userid = $1`,
      userid
    );
    return data;
  }

  async newshop( userid, shopid ) {
    const data = await this.#db.fetch(
      `INSERT INTO myminings (userid,shopid) VALUES ($1,$2) RETURNING id`,
      userid,
      shopid
    );
    return data;
  }

  async updateUserBalance(shopsum,userid){
    const data = await this.#db.fetch(
      `UPDATE login SET balance = balance - $1, WHERE id = $2 RETURNING balance`,
      shopsum,
      userid
    );
    return data;
  }

  async updateUserStatus(status,userid){
    const data = await this.#db.fetch(
      `UPDATE login SET status = $1, WHERE id = $2 RETURNING balance`,
      status,
      userid
    );
    return data;
  }



}

export default new ShopModel();


