import { PostgresModel } from "../../db/db.js";

export class LoginModel {
  #db;
  constructor() {
    this.#db = new PostgresModel();
  }

  async getAll() {
    const data = await this.#db.fetch(`SELECT * FROM login`);
    return data;
  }

  async userRetrieve(email) {
    const data = await this.#db.fetch(
      `
            SELECT * FROM login WHERE email = $1 
        `,
      email
    );

    return data;
  }

  async check(email) {
    const data = await this.#db.fetch(
      `
        SELECT * FROM login WHERE email = $1 
        `,
      email
    );
    return data;
  }

  async signIn(email, password) {
    const data = await this.#db.fetch(
      `
        SELECT * FROM login WHERE email = $1  AND password = $2 
        `,
      email,
      password
    );
    return data;
  }

  async signUp(email, referalid, name, surname, username, password) {
    const data = await this.#db.fetch(
      `INSERT INTO login (email,referalid,name,surname,username,password) VALUES ($1, $2, $3, $4,$5,$6) RETURNING id,email,referalid `,
      email,
      referalid,
      name,
      surname,
      username,
      password
    );
    return data;
  }

  async updateUser(email, name, surname) {
    const data = await this.#db.fetch(
      `UPDATE login SET name = $2, surname = $3 WHERE email = $1 RETURNING *;`,
      email,
      name,
      surname
    );
    return data;
  }

  async updateUserBalance(balance,id) {
    const data = await this.#db.fetch(
      `UPDATE login SET balance = $1 WHERE id = $2 RETURNING *;`,
      id,
      balance
    );
    return data;
  }

}

export default new LoginModel();
