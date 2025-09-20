// middleware/auth.js
const jwt = require("jsonwebtoken");
module.exports = (req,res,next) => {
  const auth = req.headers.authorization;
  if(!auth) return res.sendStatus(401);
  const token = auth.split(" ")[1];
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
};