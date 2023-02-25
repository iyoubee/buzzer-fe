import { useAuthContext } from '@contexts'
import React, { useState } from 'react'
import { CheckboxCloseFriendsProps } from './interface'

export const CheckboxCloseFriends: React.FC<CheckboxCloseFriendsProps> = ({
  id,
  isSelected,
  children,
}) => {
  const [selected, setSelected] = useState(isSelected ? true : false)
  const {
    id: authId,
    connectCloseFriends,
    disconnectCloseFriends,
  } = useAuthContext()

  const handleClick = () => {
    selected ? disconnectCloseFriends(id) : connectCloseFriends(id)
    setSelected(!selected)
  }

  return (
    <>
      <div
        className={`group px-2 py-2 flex w-full cursor-pointer select-none space-x-2 font-poppinsBold text-black items-center justify-center hover:bg-blueOnBackgroud transition-colors ${
          authId == id && 'hidden'
        }`}
      >
        <div
          onClick={handleClick}
          className={`h-5 w-5 cursor-pointer rounded-xl border-2 border-primary ${
            selected && 'bg-white'
          } flex items-center justify-center rounded-sm transition-all group-hover:bg-orange-normal`}
        >
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              selected ? 'opacity-100' : 'opacity-0'
            } transition-all`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.707 3.29931C2.61475 3.2038 2.50441 3.12761 2.3824 3.07521C2.2604 3.0228 2.12918 2.99521 1.9964 2.99406C1.86362 2.9929 1.73194 3.0182 1.60904 3.06849C1.48615 3.11877 1.3745 3.19302 1.2806 3.28691C1.18671 3.38081 1.11246 3.49246 1.06218 3.61535C1.01189 3.73825 0.986593 3.86993 0.987747 4.00271C0.988901 4.13549 1.01649 4.26671 1.0689 4.38871C1.1213 4.51072 1.19749 4.62106 1.293 4.71331L3.293 6.71331C3.48053 6.90078 3.73483 7.00609 4 7.00609C4.26516 7.00609 4.51947 6.90078 4.707 6.71331L8.707 2.71331C8.80251 2.62106 8.87869 2.51072 8.9311 2.38871C8.98351 2.26671 9.01109 2.13549 9.01225 2.00271C9.0134 1.86993 8.9881 1.73825 8.93782 1.61535C8.88754 1.49246 8.81328 1.38081 8.71939 1.28691C8.6255 1.19302 8.51385 1.11877 8.39095 1.06849C8.26805 1.0182 8.13638 0.992902 8.0036 0.994056C7.87082 0.99521 7.7396 1.0228 7.61759 1.07521C7.49559 1.12761 7.38524 1.2038 7.293 1.29931L4 4.59231L2.707 3.29931Z"
              fill="#272B52"
            />
          </svg>
        </div>
        <p
          className="font-poppins text-label-large font-extrabold text-primary w-full"
          onClick={handleClick}
        >
          {children}
        </p>
      </div>
    </>
  )
}
