const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtValidateMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).json({
      msg: "Tokennya?",
    });
  const bearerHeader = authorization.split(" ");
  const token = bearerHeader[1];

  jwt.verify(token, process.env.JWT_SECRET, function (err, decode) {
    if (err) {
      return res.status(401).json({
        status: "Fail",
        err: err,
      });
    } else {
      req.idPetugas = decode.idPetugas;
      req.username = decode.username;
      req.namaPetugas = decode.namaPetugas;
      req.level = decode.level;
      next();
    }
  });
};

module.exports = jwtValidateMiddleware;
