import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar/Navbar'

import Input from './components/Input/Input'
import Keypad from './components/Keypad/Keypad'

const InfoModal = lazy(() => import('./components/Modals/InfoModal'))

import { loadGameStateFromLocalStorage, saveGameStateToLocalStorage } from './lib/localStorage'
import { todaysLetters, validWords } from './lib/Words'
import List from './components/List/List'


function App() {

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
        ? true
        : false
  )


  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [letters] = useState(todaysLetters)
  const [words] = useState(validWords)
  const [currentWord, setCurrentWord] = useState([])
  const [foundWords, setFoundWords] = useState(() => {
    let loaded = loadGameStateFromLocalStorage()
    if (loaded) {
      if (JSON.stringify(loaded.letters) == JSON.stringify(letters)) {
        return loadGameStateFromLocalStorage().foundWords || []
      }
    }
    return []
  })
  const [currentClassName, setCurrentClassName] = useState('')

  useEffect(() => {
    // if no game state on load,
    // show the user the how-to info modal
    if (!loadGameStateFromLocalStorage()) {
      setTimeout(() => {
        setIsInfoModalOpen(true)
      }, 350)
    }
  }, [])


  useEffect(() => {
    saveGameStateToLocalStorage({ letters, foundWords })
  }, [foundWords])


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleDarkMode = (isDarkMode) => {
    setIsDarkMode(isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }
  const clearCurrentClass = () => {
    setCurrentClassName('')
  }
  const onChar = (char) => {
    if (currentWord.length < 12) {
      setCurrentWord([...currentWord, char])
    } else {
      setCurrentClassName('jiggle')
      setTimeout(() => {
        clearCurrentClass()
      }, 250)
    }
  }
  const onDelete = () => {
    setCurrentWord(currentWord.slice(0, -1))
  }
  const onEnter = () => {
    let word = currentWord.join("")
    if (currentWord.length > 1 && !foundWords.includes(word)) {
      if (words.includes(word)) {
        setFoundWords([...foundWords, word])
        setCurrentWord([])
      } else {
        setCurrentClassName('jiggle')
        setTimeout(() => {
          setCurrentWord([])
          clearCurrentClass()
        }, 400)
      }
    }
  }


  return (
    <div className="h-[100svh] overflow-x-hidden flex flex-col items-center w-screen min-h-screen pb-2">
      <Navbar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} setIsInfoModalOpen={setIsInfoModalOpen} />

      <div>
        <p className='text-xl lg:text-2xl md:text-2xl'>
          آب ءَ گوں لبز جوڑ بہ کن
        </p>
      </div>
      <div className="w-full h-screen mt-5 flex flex-wrap md:flex-row-reverse lg:flex-row-reverse px-4">
        <div className="w-full h-fit md:h-full lg:h-full md:w-1/2 lg:w-1/2 md:px-4 lg:px-4 ">
          <List foundWords={foundWords} />
        </div>
        <div className="w-full h-fit flex flex-col mt-6 sm:justify-between items-center md:w-1/2 lg:w-1/2 md:pl-7 lg:px-4">
          <Input letters={currentWord} currentClassName={currentClassName} />
          <Keypad letters={letters} onChar={onChar} onEnter={onEnter} onDelete={onDelete} />
        </div>
      </div>

      <Suspense>
        <InfoModal
          isOpen={isInfoModalOpen}
          handleClose={() => setIsInfoModalOpen(false)} />
      </Suspense>


    </div>
  )
}

export default App
