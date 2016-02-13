import React from 'react'
import transform from '../../src'

const jsx = () => (
  <div>
    <span>text</span>
  </div>
)

const rob = () => transform({
  comp: 'div',
  children: [
    {
      comp: 'span',
      children: 'text',
    },
  ],
})

export { jsx, rob }
