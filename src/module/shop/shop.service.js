import { ShopModel } from "./shop.model.js";

class ShopService {
  #_shopModel;

  constructor() {
    this.#_shopModel = new ShopModel();
  }

  async getAll() {
    const data = await this.#_shopModel.getAll();
    return data;
  }

  async myminingbalance(userid) {
    const data = await this.#_shopModel.myminingbalance(userid);
    return data;
  }

  async allshops() {
    const data = await this.#_shopModel.allshops();
    return data;
  }

  async post({ names, sale, inday, forref, allref }) {
    const data = await this.#_shopModel.post({
      names,
      sale,
      inday,
      forref,
      allref,
    });
    return {
      data: data,
      message: "Mining Successfully created",
      successfully: 207,
    };
  }

  async myshop(userid) {
    const data = await this.#_shopModel.myshop(userid);
    return data;
  }

  async newshop(userid, shopid,status) {
    const data = await this.#_shopModel.balance(userid);
    const data2 = await this.#_shopModel.sale(shopid);
    const shopsum = data2[0].sale
    
    try {
      if (data[0].balance >= data2[0].sale) {
         await this.#_shopModel.updateUserBalance(shopsum,userid,status)
        const data = await this.#_shopModel.newshop( userid, shopid );
        return {
          data,
          message: "майнинг успешно куплен",
          successfully: 207,
        };
      } else {
        return {
          message: "Не хватает денег",
          successfully: 400,
        };
      }
    } catch (error) {
      return {
        message: "Не хватает денег  ",
        successfully: 400,
      };
    }
  }
}

export default new ShopService();
