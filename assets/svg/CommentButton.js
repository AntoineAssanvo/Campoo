import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CommentButton(props) {
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
                fill="#fff"
                stroke="#4D3D64"
                strokeWidth={2}
            />
            <Path
                d="M25.992 11.6c0-.88-.712-1.6-1.592-1.6H11.6c-.88 0-1.6.72-1.6 1.6v9.6c0 .88.72 1.6 1.6 1.6h11.2L26 26l-.008-14.4zM22 19.6h-8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h8c.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm0-2.4h-8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h8c.44 0 .8.36.8.8 0 .44-.36.8-.8.8zm0-2.4h-8c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8h8c.44 0 .8.36.8.8 0 .44-.36.8-.8.8z"
                fill="#4D3D64"
            />
        </Svg>
    )
}

export default CommentButton
