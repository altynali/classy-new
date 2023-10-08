import { FC } from "react"
import { useParams } from "react-router-dom"
import useFetchClassById from "../../utils/hooks/useFetchClassById"
import { initCardObj } from "../../components/card/types"
import MyCard from "../../components/card/Card"

const ClassId: FC = () => {
  const { id } = useParams()

  const data = useFetchClassById(id || "")

  return (
    <div>
      <MyCard card={data || initCardObj} />
    </div>
  )
}

export default ClassId
