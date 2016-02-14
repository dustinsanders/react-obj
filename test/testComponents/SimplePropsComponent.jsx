import React from 'react'
import transform from '../../src'

const jsx = ({ onClick }) => (
  <div>
    <span onClick={onClick} />
  </div>
)

const rob = ({ onClick }) => transform({
  comp: 'div',
  children: [
    {
      comp: 'span',
      onClick,
    },
  ],
})

export { jsx, rob }
