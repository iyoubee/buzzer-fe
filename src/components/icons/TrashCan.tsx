import React from 'react'
import { IconProps } from './interface'

export const TrashCan: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6405 5L18.6007 17.1425C18.5111 18.1891 17.467 19 16.209 19H6.28741C5.02942 19 3.98532 18.1891 3.89569 17.1425L2.85586 5M8.85038 9V15M13.646 9V15M14.8449 5V2C14.8449 1.44772 14.3081 1 13.646 1H8.85038C8.18825 1 7.65148 1.44772 7.65148 2V5M1.65695 5H20.8394"
        stroke="#FF7070"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
