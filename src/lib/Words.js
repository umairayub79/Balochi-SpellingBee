import Letters from '../constants/games.json'

export const getWordOfTheDay = () => {
    // January 1, 2023 Game Epoch
    const epochMs = new Date(2023, 0, 0).valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    // const nextday = (index + 1) * msInDay + epochMs
  
    return {
      todaysLetters: (Letters[index].letters),
      validWords: Letters[index].validWords,
      solutionIndex: index,
    //   tomorrow: nextday,
    }
}

export const countWordsByLength = (words) => {
  // Object to store the word representation of a number
  let numberToWords = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve"
  };

  // Use reduce to iterate over the `words` array and count the frequency of words with each length
  return words.reduce((count, word) => {
    // Get the length of the current word
    let length = word.length;
    // Use the length to get the word representation of the number and append "LetterWords" to it
    let lengthInWords = numberToWords[length] + "LetterWords";
    // If `count` already has a property with this name, increment its value by 1. Otherwise, set the value to 1
    count[length] = count[length] ? count[length] + 1 : 1;
    // Return the updated count object
    return count;
  }, {})
}

export const { todaysLetters, solutionIndex, validWords } = getWordOfTheDay()

