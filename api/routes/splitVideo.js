const router = require("express").Router();
const SplitVideo = require("../models/SplitVideo");
const verify = require("../verifyToken");

// CREATE 
router.post("/", verify, async (req, res) => {
    req.body.userId = req.user.id;
    const newMovie = new SplitVideo(req.body);

    try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", verify, async (req, res) => {
    try {
        // THIS CURRENTLY REQUIRES TWO QUERIES TO THE DATABASE, I AM STILL SEARCHING FOR A BETTER SOLUTION
        const currMovie = await SplitVideo.findById(req.params.id);
        if (currMovie.userId != req.user.id) res.status(403).json("You are not allowed to update this video!");

        const updatedMovie = await SplitVideo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    } catch (err) {
        res.status(500).json(err);
    }
}
)

//DELETE
router.delete("/:id", verify, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;