const Category = require("../models/Category");

class categoryController {
  async get(req, res) {
    try {
      const cate = await Category.find({});
      res.json(cate);
    } catch (err) {
      res.json(err);
    }
  }
  //getID
  async getID(req, res) {
    try {
      const cate = await Category.findById(req.params.id);
      res.json(cate);
    } catch (err) {
      res.json(err);
    }
  }
  //post
  async post(req, res) {
    try {
      const newCate = new Category(req.body);
      const cate = await newCate.save();
      res.json(cate);
    } catch (err) {
      res.json(err);
    }
  }
  //put
  async put(req, res) {
    try {
      const cateUpdate = await Category.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(cateUpdate);
    } catch (err) {
      res.json(err);
    }
  }
  //delete
  async delete(req, res) {
    try {
      const cateUpdate = await Category.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(cateUpdate);
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new categoryController();
