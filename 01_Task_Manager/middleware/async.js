// this file is to optimize the task.controller.js file.

const asychWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log("Before");
      next(error);
    }
  };
};

module.exports = asychWrapper;
