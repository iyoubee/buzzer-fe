import { PaperPlane, PencilSquare, TrashCan } from '@icons'
import React, { useState } from 'react'
import { Button } from '../Button'
import { MessageCardProps } from './interface'
import TextareaAutosize from 'react-textarea-autosize'
import { useRouter } from 'next/router'
import { useAuthContext } from '@contexts'
import { useForm } from 'react-hook-form'

export const MessageCard: React.FC<MessageCardProps> = ({
  date,
  isAuthor,
  message,
  username,
  isCloseFriend,
  id,
  setAllMessages,
}) => {
  const [toogleEdit, setToogleEdit] = useState(false)

  const date2 = new Date(date)

  const stringDate = date2.toUTCString()

  const router = useRouter()

  const { username: uname } = router.query

  const { register, watch } = useForm()

  const { editMessage, deleteMessage, getMessages, getAllMessages } =
    useAuthContext()

  const handleDelete = () => {
    deleteMessage(id).then((x) => {
      if (uname) {
        getMessages(uname as string).then((data) => {
          setAllMessages(data)
        })
      } else {
        getAllMessages().then((data) => {
          setAllMessages(data)
        })
      }
    })
  }

  const handleEdit = () => {
    editMessage(watch('message'), id).then((x) => {
      if (uname) {
        getMessages(uname as string).then((data) => {
          setAllMessages(data)
          setToogleEdit(false)
        })
      } else {
        getAllMessages().then((data) => {
          setAllMessages(data)
          setToogleEdit(false)
        })
      }
    })
  }

  return (
    <>
      <div
        className={`h-auto w-full rounded-2xl bg-gradient-to-b ${
          isCloseFriend
            ? 'from-[#114d00] to-[#061a00]'
            : 'from-cardGradientFrom to-cardGradientTo'
        } p-5 text-white shadow-md shadow-[#1D2E4E]`}
      >
        <div className="flex justify-between items-start ">
          <div className="flex gap-2 flex-col lg:flex-row lg:items-center lg:justify-center justify-start items-start">
            <button
              onClick={() => {
                router.push(`/user/${username}`)
              }}
            >
              <p className="font-poppinsBold text-[18px]">{username}</p>
            </button>
            <p className="font-poppins opacity-70 text-[12px]">{stringDate}</p>
          </div>
          {isAuthor && (
            <div className="flex gap-3 ">
              <button
                className="cursor-pointer"
                onClick={() => setToogleEdit(!toogleEdit)}
              >
                <PencilSquare />
              </button>
              <button className="cursor-pointer" onClick={handleDelete}>
                <TrashCan />
              </button>
            </div>
          )}
        </div>
        {toogleEdit ? (
          <div className="flex flex-col items-end ">
            <TextareaAutosize
              {...register('message', { required: true })}
              className="h-fit overflow-hidden w-full resize-none rounded-md mt-2 p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
              placeholder="What's happening?"
              defaultValue={message}
              spellCheck={false}
            />
            <Button
              className="lg:max-w-[200px] w-full gap-2 text-black mt-3 "
              onClick={handleEdit}
            >
              Edit <PaperPlane />
            </Button>
          </div>
        ) : (
          <div className="font-plusJakartaSansBold pt-3 text-xl">{message}</div>
        )}
      </div>
    </>
  )
}
