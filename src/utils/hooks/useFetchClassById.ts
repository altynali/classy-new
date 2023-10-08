import classyApi from "../../config/axiosConfig"
import { useState, useEffect } from "react"

const fetchClassesById = async (id: string) => {
  try {
    const response = await classyApi.get(`/class/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const useFetchClassById = (id: string) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchClassesById(id).then((data) => setData(data))
  }, [id])

  return data
}

export default useFetchClassById
