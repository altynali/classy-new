import { FC } from "react"

type SwitcherListProps = {
  active: boolean
}

const SwitcherList: FC<SwitcherListProps> = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="24"
      viewBox="0 0 56 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0H56V24H32V0Z"
        stroke="black"
        strokeOpacity="0.01"
        strokeWidth="0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 18H53V12H36V18ZM36 5V11H53V5H36Z"
        fill={active ? "#323C46" : "#D9DCE1"}
      />
    </svg>
  )
}

export default SwitcherList
