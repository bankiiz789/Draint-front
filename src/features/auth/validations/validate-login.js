import validate from "../../../validator/validate";
import Joi from "joi";

const loginSchema = Joi.object({
  emailOrUserName: Joi.string().required().messages({
    "string.empty": "Email or Username is required",
    "any.required": "Email or Username is required",
    "object.unknown": "Email or Username not founded",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
