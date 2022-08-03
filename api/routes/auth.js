const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const passwordIsStrong = (password) => {
  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  if (strongPassword.test(password)) return true;
  return false;
}

// REGISTER
router.post("/register", async (req, res) => {
  console.log("REGISTER");

  if (!passwordIsStrong(req.body.password)) 
  {
    res.status(500).json("The password does not meet all the requirements");
    return;
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    birthday: req.body.birthday,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    if (err.keyPattern.email === 1) res.status(500).json("Email is already taken");
    if (err.keyPattern.username === 1) res.status(500).json("Username is already taken");
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  console.log("LOGIN");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("Wrong password or username!");
      return;
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password)
    {
      res.status(401).json("Wrong password or username!");
      return;
    }

    const accessToken = jwt.sign(
      { id: user._id.toString(), isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
