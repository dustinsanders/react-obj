import React from 'react'
import transform from '../../../src'

class ExtendClassComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return transform({
      comp: 'div',
      children: 'Written by extending React.component',
    })
  }
}

module.exports = ExtendClassComponent
