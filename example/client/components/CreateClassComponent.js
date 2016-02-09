import React from 'react'
import transform from '../../../src'

const CreateClassComponent = React.createClass({
  componentDidMount: () => {
    console.log('component did mount')
  },
  render: () => transform({
    comp: 'div',
    className: 'react-create-class',
    children: 'Written using React.createClass',
  }),
})

export default CreateClassComponent
