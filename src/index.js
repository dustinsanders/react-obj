"use strict"
// import _ from 'lodash'
const _ = require('lodash')

const testObj = {
  div: {
    props: { className: 'my-div' },
    children: [
      {
        span: {
          props: { className: 'my-span' },
          children: [
            {
              h1: {
                props: { className: 'my-h1' },
              },
              h2: {
                props: { className: 'my-h2' },
              },
            },
          ],
        },
      },
    ],
  },
}

const transform = (elements) => {
  return elements.map((element, idx) => {
    const keys = _.keys(element)

    const key = keys[idx]
    // console.log('----------------------')
    // console.log(element)
    // console.log('keys', keys, keys.length, key)
    // console.log('----------------------')
    const current = element[key]
    const children = current.children || []

    return [
      keys[0],
      current.props,
      children.length ? transform(children) : [],
    ]
  })
}

const transformObj = element => {
  const keys = _.keys(element)
  const key = keys[0]
  const current = element[key]

  const children = current.children || []
  const theChildren = children.map(child => transformObj(child))

  // console.log('\n-------------------------')
  // // console.log('KEY', key)
  // // console.log('SHOULD BE 1', keys.length)
  // console.log('CURRENT', current)
  // console.log('The children', theChildren)
  // // console.log('CHILDREN', children)
  // console.log('-------------------------\n')

  // console.log('should be 1', keys.length)

  return _.compact([
    key,
    current.props,
    theChildren.length
    ? theChildren
    : null,
  ])
}

// console.log(JSON.stringify(transform([testObj])[0]))
// console.log('-------------------------------------------')
// console.log(transform([testObj]))

console.log(JSON.stringify(transformObj(testObj)))
console.log('-------------------------------------------')
console.log(transformObj(testObj))
