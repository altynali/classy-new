import classes from "./TopSection.module.css"
import { FC } from "react"

type ClassProps = {
  active: string
  setActive: (active: string) => void
  classType: string
  classTypeText: string
}

const ClassType: FC<ClassProps> = ({
  active,
  setActive,
  classType,
  classTypeText,
}) => {
  return (
    <span
      className={`
        ${classes.class} pointer ${
        active === classType ? classes.active : classes.nonActive
      }`}
      onClick={() => setActive(classType)}
    >
      {classTypeText}
    </span>
  )
}

export default ClassType
