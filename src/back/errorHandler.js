function errorHandler(err, req, res, next) {
    if (!err.status) {
      return res.status(500).json(err.message);
    }
    return res.status(err.status).json(err.message);
  }
  
  module.exports = errorHandler;
  