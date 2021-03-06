module.exports = (app) => {
  const users = require('../controllers/UsersController');

  const router = require('express').Router();

  // Create a new Tutorial
  router.post('/', users.create);
  // Retrieve all Tutorials
  router.get('/', users.findAll);

  // Retrieve a single Tutorial with id
  router.get('/findOne/:email', users.findOne);
  // Update a Tutorial with id
  router.patch('/update/:email', users.update);
  // Delete a Tutorial with id
  router.delete('/delete/:email', users.delete);
  
  router.patch('/refreshToken/:email', users.updateRefreshToken);

  router.get('/findUsers/:refreshToken', users.getUsersByRefreshToken);

  // Delete all Tutorials
  // router.delete('/', users.deleteAll); 
  app.use('/api/user', router);
};
