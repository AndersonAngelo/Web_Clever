const Users = require('../models/user.model')

module.exports = {
  async index(req, res) {
    const { name } = req.params;
    let userData = await Users.find();
    return res.status(200).json(userData);
  },

  async create(req, res) {
    const data = req.body;
    // res.status(200).json(req.body)
    let user = await Users.findOne({ name_user: data.name_user });

    if (user) {
      console.log(user);
      return res.status(400).json('Usuário ja existe');
    }

    try {
      console.log(data);
      user = await Users.create(data);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}