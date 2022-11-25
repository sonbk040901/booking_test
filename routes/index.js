const router = require("express").Router(),
  api = require("/api");

router.use("/api", api);
module.exports = router;
