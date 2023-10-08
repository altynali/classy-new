import { FC } from "react"
import { CardType } from "./types"
import classes from "./Card.module.css"
import transformedDate from "../../utils/transformedDate"
import { NavLink } from "react-router-dom"

type CardProps = {
  card: CardType
}

const MyCard: FC<CardProps> = ({ card }) => {
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

  const resultDate = transformedDate(date)

  const rowIsActive = classes.card_dateOrdered // zmena orderu v row display

  const descText = description.slice(0, 47) + "..." // description delsi nez urcita delka

  // card_row card_containerRow rowIsActive card_activeRow

  return (
    <NavLink to={`/class/${_id}`} className={classes.card_containerRow}>
      <div className={classes.card_row}>
        <span className={`${classes.card_date} ${rowIsActive}`}>
          {resultDate}
        </span>
        <h3 className={classes.card_title}>{classname}</h3>

        <div>
          <p className={classes.card_description}>
            {description.length > 45 ? descText : description}
          </p>
        </div>
      </div>
      <div className={classes.card_activeRow}>
        <span>
          {attendees.length}/{no_of_places}
        </span>
        <button className={classes.card_joinBtn}>Edit</button>
      </div>
    </NavLink>
  )
}

export default MyCard
