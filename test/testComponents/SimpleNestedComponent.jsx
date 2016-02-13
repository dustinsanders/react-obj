import React from 'react'
import transform from '../../src'

const jsx = () => (
  <div>
    <div className="first-inner-div">
      <h1>Heading One</h1>
      <div>
        <span>span 1</span>
        <span>span 2</span>
      </div>
    </div>
    <div className="second-inner-div">
      <span>span 3</span>
    </div>
  </div>
)

const rob = () => transform({
  comp: 'div',
  children: [
    {
      comp: 'div',
      className: 'first-inner-div',
      children: [
        { comp: 'h1', children: 'Heading One' },
        { comp: 'div',
          children: [
            { comp: 'span', children: 'span 1' },
            { comp: 'span', children: 'span 2' },
          ],
        },
      ],
    },
    {
      comp: 'div',
      className: 'second-inner-div',
      children: [
        { comp: 'span', children: 'span 3' },
      ],
    },
  ],
})

export { jsx, rob }
