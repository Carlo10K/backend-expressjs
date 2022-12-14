const express = require('express');
const UsersService = require('../services/users.service');

const router = express.Router();
const userServ = new UsersService();

router.get('/', (req, res) => {
const users = userServ.find();
res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user= userServ.findOne(id);
  res.json(user);
});

module.exports = router;
