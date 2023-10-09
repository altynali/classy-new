import { FC } from "react"

type SwitcherGridProps = {
  active: boolean
}

const SwitcherGrid: FC<SwitcherGridProps> = ({ active }) => {
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
        d="M0 0H24V24H0V0Z"
        stroke="black"
        strokeOpacity="0.01"
        strokeWidth="0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11H9V5H4V11ZM4 18H9V12H4V18ZM10 18H15V12H10V18ZM16 18H21V12H16V18ZM10 11H15V5H10V11ZM16 5V11H21V5H16Z"
        fill={active ? "#323C46" : "#D9DCE1"}
      />
    </svg>
  )
}

export default SwitcherGrid
