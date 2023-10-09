import { FC, MouseEvent, useState } from "react"
import { CardType } from "./types"
import classes from "./Card.module.css"
import transformedDate from "../../utils/transformedDate"
import { NavLink } from "react-router-dom"
import { attendenceUtil } from "../../utils/attendenceUtil"
import { getStorageValue } from "../../utils/storage/storage"
import { LSEnum } from "../../utils/login/keys"

type CardProps = {
  card: CardType
  activeClassesStyle?: string
  refresh?: () => void
}

const MyCard: FC<CardProps> = ({ card, activeClassesStyle, refresh }) => {
  const {
    _id,
    attendees,
    classname,
    // create_date,
    // created_by,
    // created_by_name,
    date,
    description,
    // location,
    no_of_places,
  } = card
  const firstName = getStorageValue(LSEnum.FirstName)

  const [isAttendent, setIsAttendent] = useState<boolean>(
    attendees.includes(firstName)
  )

  const resultDate = transformedDate(date)
  const rowIsActive = classes.card_dateOrdered
  const activeStyle = activeClassesStyle === "switcherGrid"

  const attendenceHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    attendenceUtil(isAttendent, _id, firstName).then(() => {
      refresh?.()
      const isPersonAttendent = attendees.includes(firstName)
      setIsAttendent(isPersonAttendent)
    })
  }

  return (
    <NavLink
      to={`/class/${_id}`}
      className={activeStyle ? classes.card : classes.card_containerRow}
    >
      <div className={activeStyle ? "" : classes.card_row}>
        <span
          className={
            activeStyle
              ? classes.card_date
              : `${classes.card_date} ${rowIsActive}`
          }
        >
          {resultDate}
        </span>
        <h3 className={classes.card_title}>{classname}</h3>
        <div>
          <p className={classes.card_description}>{description}</p>
        </div>
      </div>
      <div
        className={
          activeStyle ? classes.card_activeField : classes.card_activeFieldRow
        }
      >
        <span>
          {attendees.length}/{no_of_places}
        </span>
        <button
          className={`${classes.card_btn} ${
            attendees.length.toString() >= no_of_places && !isAttendent
              ? classes.card_joinBtn_disabled
              : classes.card_joinBtn
          }`}
          onClick={attendenceHandler}
        >
          {isAttendent ? "Leave" : "Join"}
        </button>
      </div>
    </NavLink>
  )
}

export default MyCard
