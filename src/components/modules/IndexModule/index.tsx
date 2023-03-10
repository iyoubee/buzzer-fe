import React, { useEffect, useState } from 'react'
import { Button, Checkbox, CloseFriendsModal, MessageCard } from '@elements'
import { PaperPlane, People } from '@icons'
import { useAuthContext } from '@contexts'
import { useForm } from 'react-hook-form'

export const IndexModule: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isCloseFriend, setIsCloseFriend] = useState(false)
  const [allMessages, setAllMessages] = useState([])
  const [allUser, setAllUser] = useState([])

  function closeModal() {
    setIsOpenModal(false)
  }

  function openModal() {
    setIsOpenModal(true)
  }

  const {
    isLogged,
    username,
    sendPublicMessage,
    closeFriends,
    sendPrivateMessage,
    getAllMessages,
    id,
    getAllUser,
  } = useAuthContext()

  const { register, watch, reset } = useForm()

  const handlePost = () => {
    isCloseFriend
      ? sendPrivateMessage(watch('message')).then((x) => {
          reset({ message: '' })
          getAllMessages().then((data) => {
            setAllMessages(data)
          })
        })
      : sendPublicMessage(watch('message')).then((x) => {
          reset({ message: '' })
          getAllMessages().then((data) => {
            setAllMessages(data)
          })
        })
  }

  useEffect(() => {
    getAllMessages().then((data) => {
      setAllMessages(data)
    })
    getAllUser().then((data) => {
      setAllUser(data)
    })
  }, [isLogged])

  return (
    <>
      {isLogged && (
        <>
          <div className="gap-4 flex flex-col">
            <p className="font-poppinsBold text-white text-4xl">
              Welcome back,
            </p>
            <p className="font-poppinsBold text-blueOnBackgroud text-4xl">
              @{username}
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row w-full gap-3">
            <textarea
              className="h-[189.82px] lg:w-8/12 w-full resize-none rounded-md p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
              placeholder="What's happening?"
              {...register('message', { required: true })}
            />
            <div className="lg:w-4/12 w-full flex flex-col gap-4 h-auto justify-end">
              <Checkbox selected={isCloseFriend} setSelected={setIsCloseFriend}>
                Close Friend
              </Checkbox>
              <Button className="w-full gap-2" onClick={openModal}>
                Edit Close Friends <People />
              </Button>
              <Button className="w-full gap-2" onClick={handlePost}>
                Post <PaperPlane />
              </Button>
            </div>
          </div>
        </>
      )}
      <div className="mt-10 w-full flex flex-col gap-6">
        {allMessages.length != 0 &&
          allMessages.map((message: any) => (
            <MessageCard
              id={message.id}
              message={message.message}
              date={message.updatedAt}
              key={message.id}
              username={message?.author?.username}
              isAuthor={message?.author?.id == id}
              isCloseFriend={message.isCloseFriends}
              setAllMessages={setAllMessages}
            />
          ))}
      </div>
      <CloseFriendsModal
        isOpen={isOpenModal}
        onClose={closeModal}
        data={allUser}
        closeFriends={closeFriends}
      />
    </>
  )
}
