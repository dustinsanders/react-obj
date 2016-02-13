import React from 'react'
import transform from '../../src'

const SimpleComponent = require('./SimpleComponent')
const SimpleNestedComponent = require('./SimpleNestedComponent')

const jsx = () => (
  <div>
    <SimpleComponent.jsx />
    <SimpleNestedComponent.jsx />
  </div>
)

const rob = () => transform({
  comp: 'div',
  children: [
    {
      comp: SimpleComponent.rob,
    },
    {
      comp: SimpleNestedComponent.rob,
    },
  ],
})

export { jsx, rob }
