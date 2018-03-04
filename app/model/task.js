const mongoose = require('mongoose');

const taskSchema = mongoose.Schema( {
  title: String,
  desctiption: String,
  comments: [{ body: String, date: Date }],
  star: {type: Boolean, default: false },
  priority: { type: String, default: "Medium" } ,
  date: { type: Date, default: Date.now } ,
  closed: { type: boolean, default: false}

});
