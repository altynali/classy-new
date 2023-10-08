import useFetchClasses from "../../utils/hooks/useFetchClasses"
import CardList from "../../components/cardList/CardList"
import { CardType } from "../../components/Card/types"
import AppLayout from "../../components/layout/AppLayout/AppLayout"
import TopSection from "../../components/dashboard/topSection/TopSection"
import { useState } from "react"
import { Switcher } from "../../components/dashboard/types"
// import { useState } from "react"

const Dashboard = () => {
  const res: CardType[] | null = useFetchClasses()
  const [activeClassesStyle, setActiveClassesStyle] = useState<string>(
    Switcher.SwitcherGrid
  )

  return (
    <AppLayout>
      <TopSection
        activeClassesStyle={activeClassesStyle}
        setActiveClassesStyle={setActiveClassesStyle}
      />
      <CardList cards={res} activeClassesStyle={activeClassesStyle} />
    </AppLayout>
  )
}

export default Dashboard
