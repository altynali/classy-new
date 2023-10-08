import classyApi from "../config/axiosConfig"
import { setStorageValue } from "./storage/storage"

const signInUtil = async (email: string, password: string) => {
  const response = await classyApi.post("/login", {
    email,
    password,
  })

  setStorageValue(response.data._id, "auth_id")
}

export default signInUtil

// "alina@mail.com"
// "123456"
