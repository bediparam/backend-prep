function logger(req, res, next) {
  console.log(`requested URL: ${req.originalUrl}`);
  next();
}

module.exports = logger;
