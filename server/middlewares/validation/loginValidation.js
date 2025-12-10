const Joi = require("joi");

const loginValidation = async (req, res, next) => {
  const userSchema = Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": `Inserisci un indirizzo email.`,
        "any.required": "Il campo email è obbligatorio.",
        "string.email": "Inserisci un indirizzo email valido",
      }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Il campo password è obbligatorio.",
      "string.min": "La password deve contenere almeno 6 caratteri.",
      "any.required": "Il campo password è obbligatorio.",
    }),
  });

  try {
    const user = await userSchema.validateAsync(req.body);
    req.user = user;

    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { loginValidation };
