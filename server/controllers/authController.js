const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {
  //register
  async register(req, res) {
    const salt = 10;
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    try {
      const newUser = new User({
        name_user: req.body.name_user,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        password: hashPassword,
      });
      const user = await newUser.save();
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  }
  //login
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.json("Wrong user name !!!");
      }

      const comparePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!comparePassword) {
        return res.json("Wrong password !!!");
      }

      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        "billion",
        { expiresIn: "7d" }
      );

      res.json({ user, accessToken });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new authController();
