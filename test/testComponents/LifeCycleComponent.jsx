import React from 'react'
import transform from '../../src'

class rob extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.didMount()
  }
  render() {
    return transform({
      comp: 'div',
    })
  }
}

export { rob }
