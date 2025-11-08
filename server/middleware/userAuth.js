import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  //const { token } = req.cookies;

  const token =
    req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      if (!req.body) req.body = {}; //change only this
      req.body.userId = tokenDecode.id;
      //next();
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
