import { FC } from "react"
import { CardType } from "../card/types"
import MyCard from "../card/Card"
import classes from "./CardList.module.css"
import { Switcher } from "../dashboard/types"

type CardListProps = {
  cards: CardType[] | null
  activeClassesStyle: string
}

const CardList: FC<CardListProps> = ({ cards, activeClassesStyle }) => {
  return (
    <div
      className={
        activeClassesStyle === Switcher.SwitcherGrid
          ? classes.cardListGrid
          : classes.cardListRow
      }
    >
      {cards?.map((card) => (
        <MyCard key={card._id} card={card} />
      ))}
    </div>
  )
}

export default CardList
