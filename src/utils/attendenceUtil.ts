import classyApi from "../config/axiosConfig"

export const attendenceUtil = async (
  isAttendent: boolean,
  id: string,
  firstName: string
) => {
  const person = {
    class_id: id,
    username: firstName,
  }
  // console.log(firstName, isAttendent)

  try {
    if (isAttendent) {
      //   leave
      // doesnt work
      const response = await classyApi.delete("/subscribe", person)
      console.log(response)
    } else {
      //   join
      const response = await classyApi.post("/subscribe", person)
      console.log(response)
    }
  } catch (err) {
    console.error(err)
  }
}
