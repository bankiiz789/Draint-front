import Joi from "joi";
import validate from "../../../validator/validate";

const registerSchema = Joi.object({
  email: Joi.string().required().trim().messages({
    "string.empty": "Please fill your Email",
  }),
  userName: Joi.string().required().trim().messages({
    "string.empty": "please fill your Username",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "please fill your Email",
    }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "string.empty": "Password is required",
    "any.only": "Password and Confirm password did not match",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);

export default validateRegister;
