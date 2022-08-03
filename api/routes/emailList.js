const router = require("express").Router();
const Email = require("../models/Email");

router.post("/add", async (req, res) => {
  const newEmail = new Email(req.body);
  console.log(newEmail);
  try {
    const email = await newEmail.save();
    res.status(200).json(email);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
