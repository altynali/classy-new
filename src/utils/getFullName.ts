import { LSEnum } from "./login/keys"
import { getStorageValue } from "./storage/storage"

export const getFullName = () => {
  const firstName = getStorageValue(LSEnum.FirstName)
  const lastName = getStorageValue(LSEnum.LastName)
  const fullName = `${firstName} ${lastName}`

  return fullName
}
