const db = require('../models');
const User = db.users;
// Create and Save a new User
exports.create = async (req, res) => {
  //
  // validate request - Client. 
  
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    refreshToken: req.body.refreshToken,
    bio: req.body.bio,
    company: req.body.company,
    position: req.body.position,
    profilePhoto: req.body.profilePhoto
  };
  User.create(user)
    .then(data => {
      console.log("successfully add user");
      console.log(data);
      return res.send(data);

    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
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
  //
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

