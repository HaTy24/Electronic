const router = require("express").Router();
const productController = require("../controllers/productController");

//get
router.get("/", productController.get);

//get:id
router.get("/:id", productController.getID);

//post
router.post("/", productController.post);

//update
router.put("/:id", productController.put);

//delete
router.delete("/:id", productController.delete);

//search
router.post("/");

module.exports = router;
