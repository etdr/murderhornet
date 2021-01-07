import { createStore } from 'vuex'
import { generateLetters, getAllWordsForLetters } from '../logic/generation'

const store = createStore({
  state () {
    return {
      secondArity: 6,
      letters: {
        primary: 'e',
        secondaries: ['c', 'n', 'u', 'x', 'a', 't']
      },
      worddict: {},
      wordlist: ['neat', 'tent', 'executant'],
      guessed: {
        true: ['neat', 'tent'],
        false: ['cunt']
      },
      options: {
        pangram: true,
        disallowed: []
      }
    }
  },
  mutations: {
    newGame (state, params) {
      const { primary, secondaries } = generateLetters(params.quantity, params)

      state.letters.primary = primary
      state.letters.secondaries = secondaries

      state.wordlist = getAllWordsForLetters({ primary, secondaries })

      state.guessed.true = []
      state.guessed.false = []
    },

    guess (state, word) {
      if (state.wordlist.includes(word)) state.guessed.true = [...state.guessed.true, word]
      else state.guessed.false.push(word)
    }
  }
})

export default store