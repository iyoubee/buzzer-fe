import React from 'react'
import { IconProps } from './interface'

export const RistekIcon: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="31"
      height="50"
      viewBox="0 0 31 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75109 3.86828L0.0490623 7.73438L0.0401561 28.8672L0.03125 50H3.70203H7.37281L7.41297 39.0645L7.45312 28.1291L16.0698 38.6348C20.8092 44.413 24.825 49.3123 24.9942 49.5223L25.3016 49.9039L28.018 47.4281C29.512 46.0664 30.7344 44.897 30.7344 44.8297C30.7344 44.7623 27.5352 40.7569 23.625 35.9284C19.7148 31.1002 16.4922 27.088 16.4636 27.0123C16.4345 26.9359 17.9933 26.8736 19.9792 26.872L23.5469 26.8689L27.2578 22.9736L30.9688 19.0783V13.425V7.77156L28.8306 5.48734C27.6545 4.23109 25.9859 2.4825 25.1225 1.60156L23.5525 0L15.5028 0.00109375L7.45312 0.00218749L3.75109 3.86828ZM20.3186 7.75922L23.625 7.86219V13.5422V19.222L16.8672 19.1814L10.1094 19.1406L8.75609 21.875L7.40281 24.6094L7.38891 16.1328L7.375 7.65625H12.1936C14.8438 7.65625 18.5 7.70266 20.3186 7.75922Z"
        fill="white"
      />
    </svg>
  )
}
