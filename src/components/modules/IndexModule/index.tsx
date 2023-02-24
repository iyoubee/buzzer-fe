import React from 'react'
import { Button, MessageCard } from '@elements'
import Head from 'next/head'
import { PaperPlane, People } from '@icons'
import { useAuthContext } from '@contexts'
import { useForm } from 'react-hook-form'

export const IndexModule: React.FC = () => {
  const { isLogged, username, sendPublicMessage } = useAuthContext()

  const { register, watch } = useForm()

  const handlePost = () => {
    sendPublicMessage(watch('message'))
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              <Button className="w-full gap-2">
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
        <MessageCard
          message="Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit.Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit.Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit.Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit.Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit.Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit."
          username="username"
          date="04-02-2023"
          isAuthor={true}
        />
        <MessageCard
          message="Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit."
          username="username"
          date="04-02-2023"
          isAuthor={true}
        />
        <MessageCard
          message="Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit."
          username="username"
          date="04-02-2023"
          isAuthor={true}
        />
        <MessageCard
          message="Lorem ipsum dolor sit amet consectetur. Varius vitae vitae odio placerat et velit."
          username="username"
          date="04-02-2023"
          isAuthor={true}
        />
      </div>
      {/* <div className="h-screen"></div> */}
    </>
  )
}
