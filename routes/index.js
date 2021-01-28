// Establish dependencies
const router = require("express").Router();
const db = require("../../Walters_App_Gallery/models");

// Get collections
router.get("/collections", (req, res) => {
  db.Collection.find({
    title: { $regex: new RegExp(req.query.q, "i") },
  })
    .then((collections) => res.json(collections))
    .catch((err) => res.status(422).end());
});

module.exports = router;
