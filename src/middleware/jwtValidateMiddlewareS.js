const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtValidateMiddlewareS = (req, res, next) => {
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
      req.nisn = decode.nisn;
      req.nis = decode.nis;
      req.nama = decode.nama;
      req.idKelas = decode.idKelas;
      req.noTelp = decode.noTelp;
      req.idSpp = decode.idSpp
      next();
    }
  });
};

module.exports = jwtValidateMiddlewareS;
