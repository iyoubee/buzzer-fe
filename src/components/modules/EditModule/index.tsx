import { useAuthContext } from '@contexts'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

export const EditModule: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const { bio, username, editUser } = useAuthContext()
  const onSubmit = (data: any) => {
    editUser(data.username, data.bio)
    router.replace('/')
  }

  return (
    <>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <div className="mb-10">
            <p className="font-poppinsBold text-white pl-2">Username</p>
            <input
              className=" w-full resize-none rounded-md p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
              defaultValue={username}
              {...register('username', { required: true })}
            />
            {errors.username && (
              <span className="text-blueOnBackgroud font-poppins pl-2">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-10">
            <p className="font-poppinsBold text-white pl-2">Bio</p>
            <TextareaAutosize
              className=" w-full resize-none rounded-md p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
              defaultValue={bio}
              spellCheck={false}
              {...register('bio', { required: true })}
            />
            {errors.bio && (
              <span className="text-blueOnBackgroud font-poppins pl-2">
                This field is required
              </span>
            )}
          </div>

          <input
            type="submit"
            className={`bg-white px-3 py-2 rounded-md shadow-md shadow-white hover:shadow-lg hover:shadow-white transition-shadow font-poppinsBold flex items-center justify-center w-full cursor-pointer`}
          />
        </form>
      </div>
    </>
  )
}
