import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const List = React.memo(({ foundWords }) => {
  const [showList, setShowList] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    if (screenWidth >= 770) {
      setShowList(true);
    }else {
      setShowList(false)
    }
  }, [screenWidth]);

  return (
    <AnimatePresence >
      <div key={"list"} className={showList ? "border border-gray-300 dark:border-gray-600 rounded-lg w-full p-3 flex flex-row justify-between items-center min-h-[70vh] " : "border border-gray-300 dark:border-gray-600  rounded-lg w-full p-3 flex flex-row justify-between items-center"}>
        {
          showList ? <motion.div key={"expanded-list"} initial={{ y: -30, }} animate={{ y: 0, x: 0 }} className='w-full self-start'>
            <p className="pb-2">{foundWords.length == 1 ? `تو ${foundWords.length} لبزے جوڑ کُتگ` : `تو ${foundWords.length} لبز جوڑ کُتگ`}</p>
            <div className='w-full grid grid-cols-3'>
              {foundWords.length < 1 && <p className='text-gray-400'>تئی لبز۔۔۔</p>}
              {foundWords.length > 0 && foundWords.map((word) => {
                return <p key={word} className='p-4'>{word}</p>
              })}
            </div>
          </motion.div> : <motion.div key={"collapsed"} initial={{y:30}} animate={{y:0}} className='w-full flex flex-row flex-wrap'>
            {foundWords.length < 1 && <p className='text-gray-400'>تئی لبز۔۔۔</p>}
            {foundWords.length > 5 ? <div className='w-full flex flex-row flex-wrap'>
              {foundWords.slice(-5).reverse().map(word => (<p key={word} className="px-2">{word}</p>))}
              <span>...</span>
            </div> : foundWords.length > 0 && foundWords.slice().reverse().map((word) => {
              return <p key={word} className='px-2'>{word}</p>
            })}
          </motion.div>
        }
        <div className='md:invisible lg:invisible visible w-8 h-8 flex justify-center items-center self-start rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer' onClick={() => setShowList(!showList)}>
          <span className='border-black dark:border-white border-r-2 border-b-2 h-3 w-3 self-end rotate-45 mb-3 ' />
        </div>
      </div>
    </AnimatePresence>
  )
})
export default List
