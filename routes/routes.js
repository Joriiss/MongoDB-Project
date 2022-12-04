const express = require("express");
const User = require("../models/users");
const router = express.Router();

//Post Method
router.post("/users", async (req, res) => {
  const name = req.body.name; //get the datas
  const email = req.body.email;
  const age = req.body.age;

  const data = new User({
    name: name,
    email: email,
    age: age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get Method
//get all users
router.get("/users", async (req, res) => {
  try {
    const usersData = await User.find({});
    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//get users by id
router.get("/users/:id", async (req, res) => {
  const id = req.params.id; //get the id of the user from url
  try {
    const userData = await User.findById(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ message: "no users found with this id" });
  }
});

//Put Method
//update a user
router.put("/users/:id", async (req, res) => {
  const id = req.params.id; //get the id of the user from url
  const name = req.body.name; //get the datas
  const email = req.body.email;
  const age = req.body.age;

  const data = {
    name: name,
    email: email,
    age: age,
  };

  try {
    const newData = await User.findByIdAndUpdate(id, data);
    res.status(200).json(await User.findById(id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete
router.delete("/users/:id", async (req, res) => {
    const id = req.params.id; //get the id of the user from url

    try {
        const userData = await User.deleteOne({_id: id});
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json({ message: "no users found with this id" });
    }
});

module.exports = router;
