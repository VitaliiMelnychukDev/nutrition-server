
const logger = function (req, res, next) {
  console.log('logger');
  next();
};

module.exports = logger;