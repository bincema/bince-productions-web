import * as yup from 'yup'

const errorMessage = {
  short: min => `This is too short.${min ? ` Please provide at least ${min} characters.` : ''}`,
  long: max => `This is too long. ${max ? ` Maximum ${max} characters.` : ''}`,
  invalid: () => `This field value is invalid`,
  required: () => `This field is required`
}

const phoneRegex = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/

export const contactValidationSchema = yup.object({
  first_name: yup
    .string()
    .min(2, errorMessage.short(2))
    .max(64, errorMessage.long(64))
    .required(errorMessage.required()),
  last_name: yup
    .string()
    .min(2, errorMessage.required())
    .max(64, errorMessage.short())
    .required(errorMessage.required()),
  phone: yup
    .string()
    .matches(phoneRegex, errorMessage.invalid())
    .required(errorMessage.required()),
  email: yup
    .string()
    .email(errorMessage.invalid())
    .required(errorMessage.required()),
  message: yup
    .string()
    .min(2, errorMessage.short())
    .max(300, errorMessage.long())
    .required(errorMessage.required())
})