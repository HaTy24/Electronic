const Product = require("../models/Product");

class productController {
  //get
  async get(req, res) {
    const category = req.query.cate;
    const search = req.query.search;
    try {
      let product;
      if (category) {
        product = await Product.find({ categories: category });
      } else if (search) {
        const data = await Product.find({});
        product = await data.filter((item) => {
          return (
            item.name_product.toLowerCase().indexOf(search.toLowerCase()) !== -1
          );
        });
      } else {
        product = await Product.find({});
      }
      res.json(product);
    } catch (err) {
      res.json(err);
    }
  }
  //getID
  async getID(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      res.json(err);
    }
  }
  //post
  async post(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (err) {
      res.json(err);
    }
  }
  //put
  async put(req, res) {
    try {
      const productUpdate = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(productUpdate);
    } catch (err) {
      res.json(err);
    }
  }
  //delete
  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json("Deleted !!!");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new productController();
