const jwt = require("jsonwebtoken");
const config = require("../src/config/config.js");

exports.verifyToken = function(req, res, next){
    let token = req.headers["x-access-token"];
      
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
              message: "Unauthorized!"
            });
        }
        next();
    });
};
