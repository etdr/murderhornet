
import wordlist1 from '../assets/wordlist1.json'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

const WALPHABET = ALPHABET


export function generateLetters (quantity, options) {
  let chosen = []
  
  do {
    chosen = []
    while (chosen.length < quantity) {
      const l = ALPHABET[Math.floor(Math.random() * 26)]
      if (chosen.includes(l)) continue
      if (options.disallowed?.includes(l)) continue
      chosen.push(l)
    }
    console.log(chosen)
  } while (options.pangram && !pangramCheck({ primary: chosen[0], secondaries: chosen.slice(1)}))

  return { primary: chosen[0], secondaries: chosen.slice(1) }
}

function pangramCheck ({ primary, secondaries }) {
  console.log('secondaries '+secondaries)
  const allWordsForLetters = getAllWordsForLetters({ primary, secondaries })
  const letters = [...secondaries]
  letters.push(primary)
  console.log('letters '+letters)

  for (const word of allWordsForLetters) {
    if (letters.every(l => word.includes(l)) && allWordsForLetters.includes(word)) {
      console.log(word)
      return true
    }
  }
  return false
}




export function getAllWordsForLetters ({ primary, secondaries }) {

  return wordlist1.filter(word => {
    
    if (word.length < 4) return false;
    for (const letter of word) if (primary !== letter && !secondaries.includes(letter)) return false;
    if (!word.includes(primary)) return false;
    return true;
  })

  
}

const scoring = {
  4: 1,
  5: 3,
  6: 6,
  7: 9,
  8: 11,
  9: 13,
  other: 15
}



export function computePoints (guessed) {
  // let points = 0
  // for (const w of guessed.true) {
  //   points += scoring[w.length]
  // }
  //return points
  return [...guessed.true].reduce((points, word) =>
    word.length > 9 ? points + scoring[word.length] : points + scoring.other, 0)
}


