const router = require("express").Router();
const authRoutes = require("./auth");

router.use("/auth", authRoutes);

const artRoutes = require("./artcollection");
router.use("/users", artRoutes);

module.exports = router;
