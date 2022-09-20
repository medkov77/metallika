const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/tools", require("./tools.routes"));

router.use("/auth", require("./auth.routes"));
router.use("/options", require("./options.routes"));
// router.use("/idn", require("./idn.routes"));

module.exports = router;
