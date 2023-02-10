import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(25).notOneOf(["number"]).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().notOneOf(["number"]).required("Please enter your message"),
})