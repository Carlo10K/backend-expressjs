const express = require('express');
const UsersService = require('../services/users.service');

const router = express.Router();
const userServ = new UsersService();

router.get('/', (req, res) => {
const users = userServ.find();
res.json(users);

  //const { limit, offset } = req.query;
  //if (limit && offset) {
  //  res.json({
  //    limit,
  //    offset,
  //  });
  //} else {
  //  res.send('Parameters not found');
  // }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user= userServ.findOne(id);
  res.json(user);
});

module.exports = router;
