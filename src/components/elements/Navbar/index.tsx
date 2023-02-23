import { RistekIcon } from '@icons'
import React from 'react'

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full h-fit justify-between flex items-center px-10 py-5">
        <div className="flex gap-5 items-center cursor-pointer">
          <RistekIcon />
          <p className="font-poppinsBold text-white text-2xl">RISTEK MedSOS</p>
        </div>
        <div>
          <p className="font-poppinsBold text-white max-w-xl tracking-wide cursor-pointer text-lg">
            username
          </p>
        </div>
      </div>
    </>
  )
}
