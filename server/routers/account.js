const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const accountController = require("../controllers/accountController");

//get
router.get("/", verify, accountController.get);

//get:id
router.get("/:id", accountController.getID);

//update
router.put("/:id", verify, accountController.put);

//delete
router.delete("/:id", verify, accountController.delete);

module.exports = router;
