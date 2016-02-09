import React from 'react'
import ReactDOM from 'react-dom'
import transform, { init } from '../../src'
import Main from './components/Main'

init(React)

ReactDOM.render(
  transform({ comp: Main }),
  document.querySelector('.content')
)
