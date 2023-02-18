import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Keypad = ({ letters, onEnter, onDelete, onChar }) => {
  const [chars, setChars] = useState(letters);

  const onShuffle = () => {
    shuffleArray(letters)
    setChars([...letters])
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 select-none">
      <AnimatePresence>
        {chars.map((letter) => {
          return (
            <motion.button layout key={letter} className="col-span-1 bg-gray-300 hover:bg-gray-400 rounded-lg p-4 text-gray-800 font-bold text-2xl outline-none" onClick={() => { onChar(letter) }}>
              {letter}
            </motion.button>
          )
        })}
      </AnimatePresence>

      <button className='bg-red-500 hover:bg-red-600 rounded-lg p-4 text-gray-100 font-bold text-2xl outline-none active:shadow-md active:translate-y-1' onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-backspace-reverse" viewBox="0 0 16 16">
          <path d="M9.854 5.146a.5.5 0 0 1 0 .708L7.707 8l2.147 2.146a.5.5 0 0 1-.708.708L7 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708L7 7.293l2.146-2.147a.5.5 0 0 1 .708 0z"></path>
          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7.08a2 2 0 0 0 1.519-.698l4.843-5.651a1 1 0 0 0 0-1.302L10.6 1.7A2 2 0 0 0 9.08 1H2zm7.08 1a1 1 0 0 1 .76.35L14.682 8l-4.844 5.65a1 1 0 0 1-.759.35H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7.08z"></path>
        </svg>
      </button>

      <button className='bg-yellow-500 hover:bg-yellow-600 rounded-lg p-4 text-gray-100 font-bold text-2xl outline-none active:shadow-md active:translate-y-1' onClick={onShuffle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
          <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path>
        </svg>
      </button>

      <button className='bg-green-500 hover:bg-green-600 rounded-lg p-4 text-gray-100 font-bold text-2xl outline-none active:shadow-md active:translate-y-1' onClick={onEnter}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"></path>
        </svg>
      </button>

    </div>
  )
}
export default Keypad