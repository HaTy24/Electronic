const User = require("../models/User");
const bcrypt = require("bcrypt");

class accountController {
  //get
  async get(req, res) {
    if (req.user.isAdmin) {
      try {
        const account = await User.find({});
        res.json(account);
      } catch (err) {
        res.json(err);
      }
    } else {
      res.json("You not Admin !");
    }
  }
  //getId
  async getID(req, res) {
    try {
      const account = await User.findById(req.params.id);

      res.json(account);
    } catch (err) {
      res.json(err);
    }
  }
  //put
  async put(req, res) {
    if (req.user.isAdmin) {
      if (req.body.password) {
        const salt = 10;
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updateInfo = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.json(updateInfo);
      } catch (err) {
        res.json(err);
      }
    } else {
      res.status(403).json("You can update only your account!");
    }
  }
  //delete
  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Deleted !!!");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new accountController();
