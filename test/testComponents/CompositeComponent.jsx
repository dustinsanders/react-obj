import React from 'react'

const SimpleComponent = require('./SimpleComponent')
const SimpleNestedComponent = require('./SimpleNestedComponent')

const jsx =
  <div>
    {SimpleComponent.jsx}
    {SimpleNestedComponent.jsx}
  </div>

const rob = {
  comp: 'div',
  children: [
    SimpleComponent.rob,
    SimpleNestedComponent.rob,
  ],
}

export { jsx, rob }
