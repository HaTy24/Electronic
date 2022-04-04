const Bill = require("../models/Bill");
const User = require("../models/User");
const Product = require("../models/Product");

class billController {
  //get
  async get(req, res) {
    try {
      const bill = await Bill.find({});
      let user;
      let obj = {};
      const arrBill = [];
      let arrProduct = [];
      for (let i = 0; i < Object.values(bill).length; i++) {
        user = await User.findById(bill[i].postedBy);
        const id_product = bill[i].list_product;
        for (let j = 0; j < id_product.length; j++) {
          const product = await Product.findById(id_product[j]);
          arrProduct.push(product);
          obj = {
            ...bill[i]._doc,
            postedBy: user,
            list_product: arrProduct,
          };
        }
        arrProduct = [];
        arrBill.push(obj);
      }
      res.json(arrBill);
    } catch (err) {
      res.json(err);
    }
  }
  //getID
  async getID(req, res) {
    try {
      let obj = {};
      const arrProduct = [];
      const bill = await Bill.findById(req.params.id);
      const user = await User.findById(bill.postedBy);
      for (let i = 0; i < bill.list_product.length; i++) {
        const product = await Product.findById(bill.list_product[i]);
        arrProduct.push(product);
      }
      obj = { ...bill._doc, postedBy: user, list_product: arrProduct };
      res.json(obj);
    } catch (err) {
      res.json(err);
    }
  }
  //post
  async post(req, res) {
    try {
      const newBill = new Bill(req.body);
      const bill = await newBill.save();
      res.json(bill);
    } catch (err) {
      res.json(err);
    }
  }
  //put
  async put(req, res) {
    try {
      const billUpdate = await Bill.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(billUpdate);
    } catch (err) {
      res.json(err);
    }
  }
  //delete
  async delete(req, res) {
    try {
      await Bill.findByIdAndDelete(req.params.id);
      res.json("Deleted !!!");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new billController();
