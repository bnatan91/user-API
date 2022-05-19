exports.refreshToken = async (req, res) => {
  const email = req.params.email;
  User.update(req.body, {
    where: { email: email }
  })
    .then(email => {
      if (email) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with email=${email}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error updating User with email=" + email
      });
    });
};