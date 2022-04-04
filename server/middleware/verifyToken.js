const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.json("Not Authenticated !!!");
  } else {
    jwt.verify(token.split(" ")[1], "billion", function (err, decoded) {
      if (err) res.status(403).json("Token is not valid!");
      req.user = decoded;
      next();
    });
  }
};

module.exports = verify;
