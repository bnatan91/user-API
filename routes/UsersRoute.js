module.exports = (app) => {
  const users = require('../controllers/UsersController');

  const router = require('express').Router();

  // Create a new Tutorial
  router.post('/', users.create);
  // Retrieve all Tutorials
  router.get('/', users.findAll);

  // Retrieve a single Tutorial with id
  router.get('/:email', users.findOne);
  // Update a Tutorial with id
  router.patch('/update/:email', users.update);
  // Delete a Tutorial with id
  router.delete('/delete/:email', users.delete);
  // Delete all Tutorials
  // router.delete('/', users.deleteAll); // SEREM ANYINGG
  app.use('/api/users', router);
};
