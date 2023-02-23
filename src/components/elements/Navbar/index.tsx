import { RistekIcon } from '@icons'
import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full h-fit justify-between flex items-center md:px-10 px-3 md:py-5 py-1 bg-backgroundColor">
        <div className="flex gap-5 items-center cursor-pointer">
          <RistekIcon className="scale-50 md:scale-100" />
          <p className="font-poppinsBold text-white text-2xl hidden md:block">
            RISTEK MedSOS
          </p>
        </div>
        <div>
          <p className="font-poppinsBold text-white max-w-[150px] tracking-wide cursor-pointer md:text-lg text-base text-ellipsis overflow-hidden">
            username
          </p>
        </div>
      </div>
    </>
  )
}
