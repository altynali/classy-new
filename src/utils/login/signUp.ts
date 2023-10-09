import classyApi from "../../config/axiosConfig"
import { setStorageValue } from "../storage/storage"
import { LSEnum } from "./keys"

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

    setStorageValue(response.data._id, LSEnum.AuthId)
    setStorageValue(response.data.first_name, LSEnum.FirstName)
    setStorageValue(response.data.last_name, LSEnum.LastName)
  }
}

export default signUpUtil
