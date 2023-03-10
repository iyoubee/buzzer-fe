import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import { Transition, Dialog } from '@headlessui/react'
import { RegisterModalProps } from './interface'
import { useAuthContext } from '@contexts'

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const { register: regisAuth } = useAuthContext()

  const onLogin = (data: any) => {
    regisAuth(data.email, data.username, data.password).finally(() => {
      onClose()
      reset({ email: '', username: '', password: '' })
    })
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-backgroundColor border border-white pt-6 px-6 pb-3 text-left align-middle shadow-xl transition-all">
                  <form
                    onSubmit={handleSubmit(onLogin)}
                    className="flex flex-col w-full"
                  >
                    <div className="mb-5">
                      <input
                        placeholder="email"
                        type={'email'}
                        className=" w-full resize-none rounded-md p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
                        {...register('email', { required: true })}
                      />
                      {errors.email && (
                        <span className="text-blueOnBackgroud font-poppins pl-2">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mb-5">
                      <input
                        placeholder="username"
                        type={'text'}
                        className=" w-full resize-none rounded-md p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
                        {...register('username', { required: true })}
                      />
                      {errors.username && (
                        <span className="text-blueOnBackgroud font-poppins pl-2">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mb-5">
                      <input
                        type={'password'}
                        placeholder="password"
                        className=" w-full resize-none rounded-md p-3 bg-backgroundColor border-2 border-blueOnBackgroud shadow-sm shadow-blueOnBackgroud text-white focus:outline-0 focus:shadow-lg focus:shadow-blueOnBackgroud transition-shadow font-plusJakartaSansBold"
                        {...register('password', { required: true })}
                      />
                      {errors.password && (
                        <span className="text-blueOnBackgroud font-poppins pl-2">
                          This field is required
                        </span>
                      )}
                    </div>

                    <input
                      type="submit"
                      value={'Register'}
                      className={`bg-white mb-3 px-3 py-2 rounded-md shadow-md shadow-white hover:shadow-lg hover:shadow-white transition-shadow font-poppinsBold flex items-center justify-center w-full cursor-pointer`}
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
