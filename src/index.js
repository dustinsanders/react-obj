"use strict"
// import _ from 'lodash'
const _ = require('lodash')

const testObj = {
  div: {
    props: { className: 'css-class' },
    children: [
      {
        span: {
          props: { className: 'my-span' },
          children: [
            {
              h1: {
                props: { className: 'my-h1' },
              },
            },
          ],
        },
      },
      { h1: { props: {} } },
    ],
  },
}

const transform = (elements) => {
  return elements.map(element => {
    const keys = _.keys(element)

    const key = keys[0]
    const current = element[key]
    const children = current.children || []

    return _.flatten([
      keys[0],
      current.props,
      children.length ? transform(children) : []
    ])
  })
}

const key = _.keys(testObj)[0]
const parent = [
  key,
  testObj[key].props,
  testObj[key].children,
]

console.log(transform([testObj])[0])
