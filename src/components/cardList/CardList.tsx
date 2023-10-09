import { FC } from "react"
import { CardType } from "../card/types"
import MyCard from "../card/Card"
import classes from "./CardList.module.css"
import { Switcher } from "../dashboard/types"
import { NavLink } from "react-router-dom"
import { AppRoutes } from "../../pages/routes"
import NewClassBtn from "../../assets/NewClassBtn"

type CardListProps = {
  cards: CardType[] | null
  activeClassesStyle: string
  refresh: () => void
}

const CardList: FC<CardListProps> = ({
  cards,
  activeClassesStyle,
  refresh,
}) => {
  return (
    <>
      <div
        className={
          activeClassesStyle === Switcher.SwitcherGrid
            ? classes.cardListGrid
            : classes.cardListRow
        }
      >
        {cards?.map((card) => (
          <MyCard
            key={card._id}
            card={card}
            activeClassesStyle={activeClassesStyle}
            refresh={refresh}
          />
        ))}
      </div>
      <NavLink to={AppRoutes.NewClass} className={classes.newClassBtn}>
        <NewClassBtn />
      </NavLink>
    </>
  )
}

export default CardList
