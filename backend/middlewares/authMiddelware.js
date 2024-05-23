const jwt = require("jsonwebtoken");
const User = require("../Models/User");

// verify and return token
const verifyToken = async (req, res, next) => {
  try {
    const isVerifyedToken = req.headers["authorization"];

    if (typeof isVerifyedToken !== "undefined") {
      const token = isVerifyedToken.split(" ")[1];
      console.log(token)
      const isVaildToken = jwt.verify(token, process.env.SECRET);
      console.log(isVaildToken)
      if (isVaildToken) {
        req.user = await User.findById(isVaildToken.id)
        // res.json({
        //     user_id: user._id,
        //     name:user.name,
        //     email:user.email
        // })
        //req.user = user
        next();
        return
      }
      throw new Error("Please login invaild token");
    }
    throw new Error("Please login no token");
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

module.exports = {
  verifyToken,
};
