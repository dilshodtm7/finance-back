
import LoginService from "./auth.service.js";
class LoginController {
  async getAll(req, res) {
    const data = await LoginService.getAll();
    res.status(200).json(data);
  }

  async checkEmail(req, res) {
    const { email } = req.body;
    const data = await LoginService.checkEmail( email );
    res.status(200).json(data);
  }

  async signIn(req, res) {
    const { email, password } = req.body;
    const data = await LoginService.signIn( email, password );
    res.status(200).json(data);
  }
  async signUp(req, res) {
    const { email, referalid, name, surname, username, password } = req.body;
    const data = await LoginService.signUp(
      email,
      referalid,
      name,
      surname,
      username,
      password,
    );
    res.status(200).json(data);
  }

  async updateUser(req, res) {
    const { email, name, surname } = req.body;
    if (!email || !name || !surname) {
      return res
        .status(400)
        .json({
          message:
            "Missing required fields: email, names, and surname are required.",
        });
    }
    const result = await LoginService.updateUser(email, name, surname);
    return res.status(result.status).json(result);
  }

  async updateUserBalance(req, res) {
    const {balance,id} = req.body;
    const result = await LoginService.updateUserBalance(balance,id);
    return res.status(result.status).json(result);
  }


}

export default new LoginController();
