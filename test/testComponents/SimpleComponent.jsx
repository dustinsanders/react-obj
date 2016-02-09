import React from 'react'

const jsx =
  <div>
    <span>text</span>
  </div>

const rob = {
  comp: 'div',
  children: [
    {
      comp: 'span',
      children: 'text',
    },
  ],
}

export { jsx, rob }
