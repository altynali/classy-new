import classyApi from "../../config/axiosConfig"
import { useState, useEffect } from "react"

const fetchClasses = async () => {
  try {
    const response = await classyApi.get("/classes")
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const useFetchClasses = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchClasses().then((data) => setData(data))
  }, [])

  return data
}

export default useFetchClasses
