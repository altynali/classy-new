import classyApi from "../config/axiosConfig"
import { setStorageValue } from "./storage/storage"

const signUpUtil = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  repeatPassword: string
) => {
  if (password === repeatPassword) {
    const response = await classyApi.post("/signup", {
      firstName,
      lastName,
      email,
      password,
    })

    setStorageValue(response.data._id, "auth_id")
  }
}

export default signUpUtil
