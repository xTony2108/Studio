const Joi = require("joi");

const registerValidation = async (req, res, next) => {
  const userSchema = Joi.object().keys({
    firstName: Joi.string().required().messages({
      "string.empty": "Il campo nome non può essere vuoto.",
      "any.required": "Il campo nome è obbligatorio.",
    }),
    lastName: Joi.string().required().messages({
      "string.empty": `Il campo cognome non può essere vuoto.`,
      "any.required": "Il campo cognome è obbligatorio.",
    }),
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
    confirmPassword: Joi.string()
      .required()
      .custom((value, helpers) => {
        const { password } = helpers.state.ancestors[0];

        if (!value) {
          return helpers.error("any.required");
        }

        if (value !== password) {
          return helpers.error("any.only");
        }

        return value;
      })
      .messages({
        "any.only": "Le password non coincidono.",
        "string.empty": "Conferma la password.",
        "any.required": "Il campo conferma password è obbligatorio.",
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

module.exports = { registerValidation };
