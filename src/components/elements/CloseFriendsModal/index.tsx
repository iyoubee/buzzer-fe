import React, { Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { CloseFriendsModalProps } from './interface'
import { CustomListbox } from '../CustomListbox'

export const CloseFriendsModal: React.FC<CloseFriendsModalProps> = ({
  isOpen,
  onClose,
  data,
  closeFriends,
}) => {
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
                <Dialog.Panel className="w-full pb-5 max-w-md transform overflow-hidden rounded-2xl bg-backgroundColor border border-white pt-2 px-6 text-left align-middle shadow-xl transition-all">
                  <p className="text-center w-full text-white font-poppinsBold my-2">
                    Edit Close Friends
                  </p>
                  <CustomListbox people={data} closeFriends={closeFriends} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
