import { MessageCard } from '@elements'
import { useAuthContext } from '@contexts'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const UserModule: React.FC = () => {
  const router = useRouter()
  const { username } = router.query

  const [data, setData] = useState<any>()

  const [allMessages, setAllMessages] = useState([])

  const { isLogged, getMessages, id, getSimple } = useAuthContext()

  useEffect(() => {
    if (username) {
      getSimple(username as string).then((x) => {
        setData(x.data)
      })
      getMessages(username as string).then((data) => {
        setAllMessages(data)
      })
    }
  }, [isLogged, username])

  return (
    <>
      <div className="gap-4 flex flex-col">
        <p className="font-poppinsBold text-blueOnBackgroud text-4xl">
          @{data && data.username}
        </p>
        <p className="font-poppins text-white text-opacity-70">
          {data && data.bio}
        </p>
      </div>

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
    </>
  )
}
