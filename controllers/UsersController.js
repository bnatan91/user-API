const db = require('../models');
const User = db.users;
// Create and Save a new User
exports.create = async (req, res) => {

  // Check req.body whether object is empty
  if (Object.keys(req.body).length === 0)
    return res.status(400).send({ message: "Content can not be empty" });

  console.log(req.body);
  // const user = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   password: req.body.password,
  //   phoneNumber: req.body.phoneNumber,
  //   refreshToken: req.body.refreshToken,
  //   bio: req.body.bio,
  //   company: req.body.company,
  //   position: req.body.position,
  //   profilePhoto: req.body.profilePhoto
  // };

  await User.create(req.body)
    .then(data => {
      console.log("successfully add user");
      return res.send(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || "some error occurred while creating the user"
      });
    });

};
// Retrieve all User from the database.
exports.findAll = async (req, res) => {
  //
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    console.error(error)
  }
};
// Find a single User with an id
exports.findOne = async (req, res) => {
  console.log('FIND ONE LERRRRRRRR');
  const email = req.params.email;
  await User.findOne({
    where: { email: email }
  })
    .then(data => {
      if (data) {
        console.log(data);
        res.send(data);
      }
      else {
        console.log('Data is empty');
        res.status(404).send({
          message: "Cannot find email"
        });
      }
    });
};
// Update a User by the id in the request
exports.update = async (req, res) => {
  //
};
// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  //
};
// Delete all User from the database.
exports.deleteAll = async (req, res) => {
  //
};

