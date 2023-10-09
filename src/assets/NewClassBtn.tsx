import { FC } from "react"

const NewClassBtn: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="74"
      viewBox="0 0 74 74"
      fill="none"
    >
      <g filter="url(#filter0_d_30_777)">
        <circle cx="37" cy="31" r="28" fill="#323C46" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 32H38V38H36V32H30V30H36V24H38V30H44V32Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_30_777"
          x="0"
          y="0"
          width="74"
          height="74"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="4.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_30_777"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_30_777"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default NewClassBtn
