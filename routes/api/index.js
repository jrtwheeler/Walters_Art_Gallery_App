const router = require("express").Router();
const artRoutes = require("./artcollection");

// Book routes
router.use("/users", artRoutes);

module.exports = router;