import { createStore } from 'vuex'
import { generateLetters, getAllWordsForLetters } from '../logic/generation'

const store = createStore({
  state () {
    return {
      secondArity: 6,
      letters: {
        primary: '',
        secondaries: []
      },
      worddict: {},
      wordlist: [],
      guessed: {
        true: new Set(),
        false: new Set()
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

      state.guessed.true = new Set()
      state.guessed.false = new Set()
    },

    guess (state, word) {
      if (state.wordlist.includes(word)) {
        if (state.guessed.true.has(word)) console.log('you already got this')
        state.guessed.true.add(word)
      } else {
        if (!word.split('').every(l => [...state.letters.secondaries, state.letters.primary].includes(l)))
          console.log('bad letters')
        
        else if (state.guessed.false.has(word)) console.log('you already tried that one')

        else if (!word.includes(state.letters.primary)) console.log('missing center letter')

        else console.log('not a word')
        
        state.guessed.false.add(word)
      }
    }
  }
})

export default store