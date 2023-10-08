import classes from "./TopSection.module.css"
import SwitcherGrid from "../../../assets/SwitcherGrid"
import SwitcherList from "../../../assets/SwitcherList"
import { FC, useState } from "react"
import { Classes, Switcher } from "../types"
import ClassType from "./ClassType"

type TopSectionProps = {
  activeClassesStyle: string
  setActiveClassesStyle: (activeClassesStyle: string) => void
}

const TopSection: FC<TopSectionProps> = ({
  activeClassesStyle,
  setActiveClassesStyle,
}) => {
  const [activeClasses, setActiveClasses] = useState<string>(Classes.All)

  return (
    <div className={classes.classes}>
      <div>
        <ClassType
          active={activeClasses}
          setActive={setActiveClasses}
          classType={Classes.All}
          classTypeText="All classes"
        />
        <ClassType
          active={activeClasses}
          setActive={setActiveClasses}
          classType={Classes.Past}
          classTypeText="Past classes"
        />
        <ClassType
          active={activeClasses}
          setActive={setActiveClasses}
          classType={Classes.Future}
          classTypeText="Future classes"
        />
      </div>
      <div>
        <span
          onClick={() => setActiveClassesStyle(Switcher.SwitcherGrid)}
          className="pointer"
        >
          <SwitcherGrid active={activeClassesStyle === Switcher.SwitcherGrid} />
        </span>
        <span
          onClick={() => setActiveClassesStyle(Switcher.SwitcherList)}
          className="pointer"
        >
          <SwitcherList active={activeClassesStyle === Switcher.SwitcherList} />
        </span>
      </div>
    </div>
  )
}

export default TopSection
