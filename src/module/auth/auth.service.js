import { LoginModel } from "./auth.model.js";

class LoginService {
  #_loginModel;

  constructor() {
    this.#_loginModel = new LoginModel();
  }

  async getAll() {
    const data = await this.#_loginModel.getAll();
    return data;
  }

  async checkEmail(email) {
    const user = await this.#_loginModel.check(email);

    const retrieve = await this.#_loginModel.userRetrieve(email);
    try {
      if (email === user[0].email) {
        return {
          email,
          uuid: retrieve[0].id,
          name: retrieve[0].name,
          surname: retrieve[0].surname,
          username: retrieve[0].username,
          balance: retrieve[0].balance,
          status: retrieve[0].status,
          successfully: 207,
        };
      } else {
        return {
          message: "Email Not found",
          successfully: 401,
        };
      }
    } catch (error) {
      if (!retrieve[0]) {
        return {
          message: "User Not found",
          email,
          successfully: 407,
        };
      }
    }
  }
  async signIn(email, password) {
    const user = await this.#_loginModel.signIn(email, password);
    const retrieve = await this.#_loginModel.signIn(email, password);
    try {
      if (email === user[0].email && password === user[0].password) {
        return {
          email: user[0].email,
          id: user[0].id,
          successfully: 207,
        };
      } else {
        return {
          message: "Invalid Email or Password",
          successfully: 401,
        };
      }
    } catch (error) {
      if (!retrieve[0]) {
        return {
          message: "Invalid Email or Password",
          email,
          successfully: 407,
        };
      }
    }
  }

  async signUp(email, referalid, name, surname, username, password) {
    const data = await this.#_loginModel.signUp(
      email,
      referalid,
      name,
      surname,
      username,
      password
    );
    return {
      data: data,
      message: "account successfully created",
      successfully: 207,
    };
  }

  async updateUser(email, name, surname) {
    const data = await this.#_loginModel.updateUser(email, name, surname);
    if (!data) {
      return {
        message: "User not found or update failed 3",
        status: 404,
      };
    }
    const user = await this.#_loginModel.userRetrieve(email);
    if (user) {
      return {
        data: data.rows,
        message: "User successfully updated",
        status: 200,
      };
    }
    return {
      message: "User not found after update 2",
      status: 404,
    };
  }

  async updateUserBalance(balance,id) {
    const data = await this.#_loginModel.updateUserBalance(id,balance);
    
    if (data) {
      return {
        data: data.rows,
        message: "User successfully updated",
        status: 200,
      };
    }
    return {
      message: "User not found after update 2",
      status: 404,
    };
  }


}

export default new LoginService();
