const router = require("express").Router();
router.get("/test", (req, res, next) => {
  res.json({
    status: "success",
    message: "test",
    url: req.url,
  });
});
module.exports = router;
