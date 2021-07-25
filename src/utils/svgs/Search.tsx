import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.188 11.623a6.422 6.422 0 111.436-1.436c.1.05.195.118.279.202l3.784 3.784a1.07 1.07 0 11-1.514 1.513l-3.784-3.783a1.067 1.067 0 01-.201-.28zm.514-5.201a4.28 4.28 0 11-8.561 0 4.28 4.28 0 018.562 0z"
        fill="#747476"
      />
    </Svg>
  )
}

export default SvgComponent
