const Task = require("../models/task.model");
const asychWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asychWrapper(async (req, res) => {
  const tasks = await Task.find({});
  // res.status(201).json({ tasks });
  res.status(201).json({ tasks, amount: tasks.length });
  // res.status(201).json({ success: true });
});

const createTask = asychWrapper(async (req, res) => {
  //   res.send("create tasks");
  // res.json(req.body); //// this is similar to sending to postman or browser.
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asychWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return next(createCustomError(`no task found with id : ${id}`, 404));
  }
  res.status(500).json({ Message: err.message });
});

const updateTask = asychWrapper(async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`no task found with id : ${id}`, 404));
  } else {
    res.status(200).json({ task });
  }
});

const deleteTask = asychWrapper(async (req, res) => {
  const { id } = req.params;
  // const task = await Task.deleteOne({ _id: id }); // if you want to delete
  const task = await Task.findOneAndDelete({ _id: id }); // send to postman and also delete
  if (!task) {
    return next(createCustomError(`no task found with id : ${id}`, 404));
  } else {
    res.status(200).json({ task });
  }
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
