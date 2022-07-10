exports.register = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const passowrd = req.body.password;

  const result = {
    message: "Register success!!!",
    data: {
      uid: 1,
      name: name,
      email: email,
    },
  };
  res.status(201).json(result);
  next();
};
