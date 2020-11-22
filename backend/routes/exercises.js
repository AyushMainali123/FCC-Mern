const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const { username, description, duration } = req.body;
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id/update").post((req, res) => {

  console.log(req.body)
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
