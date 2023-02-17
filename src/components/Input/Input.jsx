import { AnimatePresence, motion } from 'framer-motion'

const Input = ({ letters, currentClassName = "" }) => {
    return (
      <div className={`grid grid-cols-6 gap-3 md:gap-5 min-h-[150px] mb-10 ${currentClassName}`}>
        <AnimatePresence>
          {letters.map((char, index) => {
            return <motion.div
              layout
              initial={{
                scale: 0.2,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{
                duration: 0.2
              }}
              key={char + index}
              className="h-11 w-11 md:w-14 md:h-14 rounded-lg p-2 text-3xl  text-center bg-gray-800 text-gray-200 dark:text-gray-900 dark:bg-gray-300">
              {char}
            </motion.div>
          })}
        </AnimatePresence>
      </div>)
  
  }
export default Input