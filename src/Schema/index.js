import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).notOneOf(["number"]).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your Email"),
})