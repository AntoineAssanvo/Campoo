import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function ShareButton(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={18}
        cy={18}
        r={17}
        fill="white"
        stroke="#4D3D64"
        strokeWidth={2}
      />
      <Path
        d="M24 22.08C23.24 22.08 22.56 22.38 22.04 22.85L14.91 18.7C14.96 18.47 15 18.24 15 18C15 17.76 14.96 17.53 14.91 17.3L21.96 13.19C22.5 13.69 23.21 14 24 14C25.66 14 27 12.66 27 11C27 9.34 25.66 8 24 8C22.34 8 21 9.34 21 11C21 11.24 21.04 11.47 21.09 11.7L14.04 15.81C13.5 15.31 12.79 15 12 15C10.34 15 9 16.34 9 18C9 19.66 10.34 21 12 21C12.79 21 13.5 20.69 14.04 20.19L21.16 24.35C21.11 24.56 21.08 24.78 21.08 25C21.08 26.61 22.39 27.92 24 27.92C25.61 27.92 26.92 26.61 26.92 25C26.92 23.39 25.61 22.08 24 22.08Z"
        fill="#4D3D64"
      />
    </Svg>
  )
}

export default ShareButton