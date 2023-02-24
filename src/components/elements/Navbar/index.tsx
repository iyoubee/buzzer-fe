import { Menu, Transition } from '@headlessui/react'
import { ArrowLeft, Home, RistekIcon } from '@icons'
import React, { Fragment } from 'react'

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="sticky top-0 z-50 w-full h-fit justify-between flex items-center md:px-10 px-3 md:py-5 py-1 bg-backgroundColor">
        <div className="flex gap-5 items-center cursor-pointer">
          <RistekIcon className="scale-50 md:scale-100" />
          <p className="font-poppinsBold text-white text-2xl hidden md:block">
            RISTEK MedSOS
          </p>
        </div>
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="font-poppinsBold text-white max-w-[150px] tracking-wide cursor-pointer md:text-lg text-base text-ellipsis overflow-hidden">
                username
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-blueOnBackgroud text-white'
                            : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                      >
                        <Home /> Home
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-blueOnBackgroud text-white'
                            : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                      >
                        <ArrowLeft /> Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  )
}
