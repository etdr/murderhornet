import { createStore } from 'vuex'
import { generateLetters, getAllWordsForLetters, computePoints } from '../logic/generation'

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
      },
      mbm: 'bad letters',
      points: 0
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
        

        if (state.guessed.true.has(word)) state.mbm = 'you already got that one'
        else if ([...state.letters.secondaries, state.letters.primary].every(l => word.split('').includes(l))) state.mbm = 'pangram!'
        else state.mbm = ['good one', 'nice', 'ok', 'that\'s a word', 'yup', 'yes', 'all righty'][Math.floor(Math.random()*7)]
        state.guessed.true.add(word)
      } else {
        if (word.split('').some(l => ![...state.letters.secondaries, state.letters.primary].includes(l)))
          state.mbm = 'bad letters'
        
        
        else if (state.guessed.false.has(word)) state.mbm = 'you already tried that one'

        else if (!word.includes(state.letters.primary)) state.mbm = 'missing center letter'

        else if (word.length < 4) state.mbm = 'too short'

        else state.mbm = 'not a word'
        
        state.guessed.false.add(word)
      }

      state.points = computePoints(state.guessed)
      console.log(state.points)
    }
  },
  
})

export default store