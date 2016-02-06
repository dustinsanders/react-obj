import React from 'react'
import ReactDOM from 'react-dom'
import transform from '../../../src'
import CustomComponent from './CustomComponent'

const toTransform = {
  comp: 'div',
  className: 'my-div',
  children: [
    {
      comp: 'div',
      className: 'inner-div',
      children: [
        {
          comp: 'span',
        },
        {
          comp: 'div',
          onClick: () => {console.log('clicking my div')},
          children: 'click me',
        },
      ],
    },
    {
      comp: 'div',
      className: 'second-div',
      children: 'some text',
    },
    {
      comp: CustomComponent,
      text: 'should work',
    },
  ],
}

ReactDOM.render(transform(React, toTransform), document.querySelector('.content'))
