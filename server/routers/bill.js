const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const billController = require("../controllers/billController");

//get
router.get("/", billController.get);
//get:id
router.get("/:id", billController.getID);

//post
router.post("/", billController.post);

//update
router.put("/:id", verify, billController.put);

//delete
router.delete("/:id", verify, billController.delete);

module.exports = router;
