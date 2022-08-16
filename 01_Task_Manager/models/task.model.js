const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true, // so that we can removed leading and trailing white spaces if used enters some.
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
  lastname: { type: String },
});

const Tasks = mongoose.model("task", TaskSchema);

module.exports = Tasks;
