const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const categoryController = require("../controllers/categoryController");

//get
router.get("/", categoryController.get);
//get:id
router.get("/:id", categoryController.getID);

//post
router.post("/", categoryController.post);

//update
router.put("/:id", verify, categoryController.put);

//delete
router.delete("/:id", verify, categoryController.delete);

module.exports = router;
