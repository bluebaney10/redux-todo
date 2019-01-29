import React from 'react'
import ReactDom from 'react-dom'

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import CounterContainer from './components/CounterContainer'


const reducer = (state = { counter: 0}, action) => {
  if (action.type === 'ADD') {
    return {
      counter: state.counter + action.payload,
    }
  }
  return state
}


const store = createStore(reducer)

ReactDom.render(<Provider store={store}><CounterContainer /></Provider>, document.getElementById('root'))
