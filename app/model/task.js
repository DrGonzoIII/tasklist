const mongoose = require('mongoose');

const taskSchema = mongoose.Schema( {
  userId:String,
  title: String,
  description: String,
  comments: [{ body: String, date: Date }],
  star: {type: Boolean, default: false },
  priority: { type: String, default: "Medium" } ,
  date: { type: Date, default: Date.now } ,
  closed: { type: Boolean, default: false}

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Task', taskSchema);
