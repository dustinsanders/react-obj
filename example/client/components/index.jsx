const React = require('react')
const ReactDOM = require('react-dom')
const transform = require('../../../src')

const testObj = {
  div: {
    props: { className: 'my-div' },
    children: [],
  },
}

const longObj = {
  div: {
    props: { className: 'my-div' },
    children: [
      {
        span: {
          props: { className: 'my-span' },
          children: [
            {
              h1: { children: 'h1 text' },
              h2: {
                props: { className: 'my-h2' },
                children: [
                  {
                    div: {
                      props: { className: 'my-h4' },
                      children: [
                        {
                          span: {
                            children: 'new text',
                            props: { className: 'my-h5' },
                          },
                        },
                      ],
                    },
                    span: {
                      props: { className: 'my-h4' },
                      children: [
                        {
                          span: {
                            children: 'h5 text',
                            props: { className: 'my-h5' },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
}


ReactDOM.render(transform(React, longObj), document.querySelector('.content'))
