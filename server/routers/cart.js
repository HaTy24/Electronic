const router = require("express").Router();
const verify = require("../middleware/verifyToken");
const cartController = require("../controllers/cartController");

router.get("/", verify, cartController.get);

router.post("/", verify, cartController.post);

router.put("/:id", cartController.put);

router.delete("/:id", cartController.delete);

router.delete("/item/:id", async (req, res) => {
  try {
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
