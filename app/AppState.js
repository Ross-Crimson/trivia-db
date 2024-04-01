import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Question } from './models/Question.js'

class ObservableAppState extends EventEmitter {

  ///**@type {import('./models/Example.js').Example[]} */

  /** @type {Question[]} */
  questions = []

  /** @type {Question} */
  currentQuestion = null
}

export const AppState = createObservableProxy(new ObservableAppState())