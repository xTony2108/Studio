const bcrypt = require("bcrypt");
const { User } = require("../../db");

const registerController = async (req, res) => {
  const { name, lastName, email, password } = req.user;

  try {
    const emailExists = await User.exists({ email: email.toLowerCase() });

    if (emailExists)
      return res.status(400).json({ message: "Email già registrata!" });

    const cryptedPW = await bcrypt.hash(password, 12);
    await User.create({
      name,
      lastName,
      email: email.toLowerCase(),
      password: cryptedPW,
      role: "user",
    });

    return res
      .status(201)
      .json({ message: "Registrazione effettuata con successo!" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Errore interno" });
  }
};

module.exports = { registerController };
