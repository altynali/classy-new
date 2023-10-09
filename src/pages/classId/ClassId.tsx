import { FC } from "react"
import { useParams } from "react-router-dom"
import useFetchClassById from "../../utils/hooks/useFetchClassById"
import MyCard from "../../components/card/Card"
import Loading from "../../components/loading/Loading"

const ClassId: FC = () => {
  const { id } = useParams()

  const data = useFetchClassById(id || "")

  if (!data) return <Loading />

  return (
    <div>
      <MyCard card={data} />
    </div>
  )
}

export default ClassId
