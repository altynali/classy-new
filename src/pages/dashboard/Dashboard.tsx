import useFetchClasses from "../../utils/hooks/useFetchClasses"
import CardList from "../../components/cardList/CardList"
import AppLayout from "../../components/layout/AppLayout/AppLayout"
import TopSection from "../../components/dashboard/topSection/TopSection"
import { useState } from "react"
import { Switcher } from "../../components/dashboard/types"
import Loading from "../../components/loading/Loading"
// import { useState } from "react"

const Dashboard = () => {
  const { data, refresh } = useFetchClasses()
  const [activeClassesStyle, setActiveClassesStyle] = useState<string>(
    Switcher.SwitcherGrid
  )

  if (!data) return <Loading />

  return (
    <AppLayout>
      <TopSection
        activeClassesStyle={activeClassesStyle}
        setActiveClassesStyle={setActiveClassesStyle}
      />
      <CardList
        cards={data}
        activeClassesStyle={activeClassesStyle}
        refresh={refresh}
      />
    </AppLayout>
  )
}

export default Dashboard
