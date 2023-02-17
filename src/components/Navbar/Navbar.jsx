import React from 'react'
import { InformationCircleIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export const Navbar = ({ isDarkMode, handleDarkMode, setIsInfoModalOpen}) => {
  return (
    <div className="mb-[2%] w-full py-2">
      <div className="flex h-[3rem] items-center justify-between px-5">
        <div className='flex flex-row'>
          <InformationCircleIcon
            className="h-7 w-7 mr-2 cursor-pointer dark:stroke-gray-200"
            onClick={() => setIsInfoModalOpen(true)} />
        </div>
        <p className="text-2xl font-bold dark:text-gray-200">بلوچی</p>
        <div className="flex">
          {isDarkMode ? <SunIcon className="h-7 w-7 mr-3 cursor-pointer dark:stroke-gray-200" onClick={() => { handleDarkMode(false) }} />
            : <MoonIcon className="h-7 w-7 mr-3 cursor-pointer dark:stroke-gray-200" onClick={() => { handleDarkMode(true) }} />}

        </div>
      </div>
      <hr className='border-gray-200 dark:border-gray-700' />
    </div>
  )
}
