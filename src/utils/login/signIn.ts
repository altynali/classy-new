import classyApi from "../../config/axiosConfig"
import { setStorageValue } from "../storage/storage"
import { LSEnum } from "./keys"

const signInUtil = async (email: string, password: string) => {
  const response = await classyApi.post("/login", {
    email,
    password,
  })

  setStorageValue(response.data._id, LSEnum.AuthId)
  setStorageValue(response.data.first_name, LSEnum.FirstName)
  setStorageValue(response.data.last_name, LSEnum.LastName)
}

export default signInUtil

// alina@mail.com
// 123456
