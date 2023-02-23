import { PencilSquare, TrashCan } from '@icons'
import React from 'react'
import { MessageCardProps } from './interface'

export const MessageCard: React.FC<MessageCardProps> = ({
  date,
  isAuthor,
  message,
  username,
}) => {
  return (
    <>
      <div className="w-full rounded-2xl bg-gradient-to-b from-cardGradientFrom to-cardGradientTo p-5 text-white shadow-md shadow-[#1D2E4E]">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 flex-col lg:flex-row lg:items-center lg:justify-center">
            <button>
              <p className="font-poppinsBold text-[18px]">{username}</p>
            </button>
            <p className="font-poppins opacity-70 text-[12px]">{date}</p>
          </div>
          {isAuthor && (
            <div className="flex gap-3">
              <button className="cursor-pointer">
                <PencilSquare />
              </button>
              <button className="cursor-pointer">
                <TrashCan />
              </button>
            </div>
          )}
        </div>
        <div className="font-plusJakartaSansBold pt-3 text-xl">{message}</div>
      </div>
    </>
  )
}
