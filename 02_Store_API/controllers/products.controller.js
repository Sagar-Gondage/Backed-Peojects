//// if we ues npm install express-async-errors then there is no need to use try catch block
//// in this project we have used it.
//// the project in which we have not used is the 01-task-manager

const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: "products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products  route" });
};

module.exports = { getAllProductsStatic, getAllProducts };
