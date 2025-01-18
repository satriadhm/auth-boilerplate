const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send({ message: err.message || "Internal Server Error" });
};

module.exports = { errorHandler };
