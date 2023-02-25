// import { MessageCard } from '@elements'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

export const UserModule: React.FC = () => {
  const router = useRouter()
  const { username } = router.query
  console.log(username)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="gap-4 flex flex-col">
        <p className="font-poppinsBold text-blueOnBackgroud text-4xl">
          @username
        </p>
        <p className="font-poppins text-white text-opacity-70">
          Lorem ipsum dolor sit amet consectetur. Leo sit vestibulum lacus
          facilisis accumsan et nisi. Amet etiam eu dui quis nunc.
        </p>
      </div>

      <div className="mt-10 w-full flex flex-col gap-6">
        {/* <MessageCard
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
        /> */}
      </div>

      {/* <div className="h-screen"></div> */}
    </>
  )
}
