const bcrypt = require("bcrypt");
const { User } = require("../../db");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  const { email, password } = req.user;

  try {
    const user = await User.findOne(
      { email: email.toLowerCase() },
      "name lastName role email password",
      {
        lean: true,
      }
    );

    if (!user) return res.status(400).json({ message: "Credenziali errate" });

    const { name, lastName, role, password: crypted } = user;

    const comparePassword = await bcrypt.compare(password, crypted);

    if (!comparePassword)
      return res.status(400).json({ message: "Credenziali errate" });

    const { JWT_SECRET_REFRESH, JWT_SECRET } = process.env;

    const expiration = new Date(Date.now() + 15 * 60 * 1000).getTime();

    const accessToken = jwt.sign({ name, lastName, role }, JWT_SECRET, {
      expiresIn: expiration,
    });

    const refreshToken = jwt.sign(
      { name, lastName, role },
      JWT_SECRET_REFRESH,
      {
        expiresIn: "30d",
      }
    );

    res.cookie("refreshToken", refreshToken);

    return res
      .status(201)
      .json({ message: "Login effettuato con successo!", accessToken });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Errore interno" });
  }
};

module.exports = { loginController };
