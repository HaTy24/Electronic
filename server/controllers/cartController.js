const Cart = require("../models/Cart");
const Product = require("../models/Product");

class cartController {
  async get(req, res) {
    try {
      const idUser = req.user.id;
      const cart = await Cart.find({ id_user: idUser });
      const list_product = [];
      const list_cart = [];
      let obj = {};
      const quantity = null;
      for (let i = 0; i < cart.length; i++) {
        const arrProduct = cart[i].list_product;
        for (let j = 0; j < arrProduct.length; j++) {
          const product = await Product.findById(arrProduct[j]);
          list_product.push(product);
          obj = { ...cart[i]._doc, list_product: list_product };
        }
        list_cart.push(obj);
      }
      res.json(obj);
    } catch (err) {
      res.json(err);
    }
  }
  //post
  async post(req, res) {
    try {
      const idUser = req.user.id;
      let cart;
      const oldUser = await Cart.find({ id_user: idUser });
      if (oldUser.length !== 0) {
        const listPro = oldUser[0].list_product;
        const listQty = oldUser[0].list_quantity;
        let check = false;
        for (let j = 0; j < listPro.length; j++) {
          if (listPro[j] === req.body.list_product) {
            listQty[j] += req.body.list_quantity;
            cart = await Cart.findOneAndUpdate(
              { id_user: oldUser[0].id_user },
              {
                $set: {
                  id_user: req.body.id_user,
                  list_product: listPro,
                  list_quantity: listQty,
                },
              }
            );
            res.json(cart);
            check = true;
            break;
          } else {
            check = false;
          }
        }
        if (check === false) {
          await listPro.push(req.body.list_product);
          await listQty.push(req.body.list_quantity);
          cart = await Cart.findOneAndUpdate(
            { id_user: oldUser[0].id_user },
            {
              $set: {
                id_user: req.body.id_user,
                list_product: listPro,
                list_quantity: listQty,
              },
            }
          );
          res.json(cart);
        }
      } else {
        const newCart = new Cart(req.body);
        await newCart.save();
        res.json(newCart);
      }
    } catch (err) {
      res.json(err);
    }
  }
  //put
  async put(req, res) {
    try {
      const billUpdate = await Cart.findByIdAndUpdate(
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
      const deleteCart = await Cart.findByIdAndDelete(req.params.id);
      res.json("deleted !!!");
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = new cartController();
