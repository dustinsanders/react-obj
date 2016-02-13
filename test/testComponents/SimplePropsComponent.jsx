import React from 'react'
import { stub } from 'sinon'
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

const props = {
  onClick: stub(),
}

export { jsx, props, rob }
