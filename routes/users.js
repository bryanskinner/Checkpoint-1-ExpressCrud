const express = require('express');
const router = express.Router();
const userData = require('../data/index');
const sampleUser = require('../data/sampleUser');

router.get('/', (req, res) => {
    res.json(userData);
  });


// * GET
  router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userData.find((user) => user.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  

// * POST
  router.post('/', (req, res) => {
    const newUser = {
      id: userData.length + 1,
      ...sampleUser
    };
  
    userData.push(newUser);
    res.status(201).json(newUser);
  });


    // * PUT
  router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = userData.findIndex((user) => user.id === userId);
  
    if (userIndex !== -1) {
      userData[userIndex] = {
        id: userId,
        ...sampleUser
      };
  
      res.json(userData[userIndex]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  

// *  DELETE
  router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = userData.findIndex((user) => user.id === userId);
  
    if (userIndex !== -1) {
      const deletedUser = userData.splice(userIndex, 1)[0];
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });


  module.exports = router;
