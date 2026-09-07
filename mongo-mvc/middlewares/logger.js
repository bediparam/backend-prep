function logger(req, res, next) {
  console.log(`requested URL: ${req.originalUrl} by ${req.ip}`);
}

module.exports = logger;
