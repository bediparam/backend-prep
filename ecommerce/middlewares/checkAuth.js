const { getUser } = require("../services/auth");

function checkAuth(req, res, next) {
  const uid = req.cookies.uid;
  const user = getUser(uid);
  req.user = user ? user : null;
  next();
}

module.exports = checkAuth;
