const mongoose = require('mongoose');
const Task = require('./model/task');
var isLoggedIn = require('./isLoggedIn');

module.exports = app => {
  app.post('/api/tasks', async (req, res) => {
    console.log('post api task');
    const { title, description } = req.body;

    const task = new Task({
      title,
      description,
      userId: req.user.email
    });

    try {
     await task.save();
     console.log('Task saved\n');
      //const task = await req.task.save();

      res.redirect('/tasks');
    } catch (err) {
      res.status(422).send(err);
    }
  });
}
