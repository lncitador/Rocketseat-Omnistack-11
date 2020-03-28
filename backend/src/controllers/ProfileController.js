const connection = require("../database/connection");

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const ongs = await connection("incidents")
      .where({
        ong_id
      })
      .select("*");

    return res.json(ongs);
  }
}

module.exports = new ProfileController();
