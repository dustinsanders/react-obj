"use strict"
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
                children: [
                  {
                    h3: {
                      props: { className: 'my-h3' },
                    },
                    h4: {
                      props: { classname: 'my-h4' },
                      children: [
                        {
                          h5: {
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

const transform = element => {
  return _.keys(element).map(key => {
    const current = element[key]
    const children = current.children || []
    const theChildren = children.map(child => transform(child))

    return _.compact([
      key,
      current.props,
      theChildren.length
      ? _.flatten(theChildren)
      : null,
    ])
  })
}


console.log(JSON.stringify(transform(testObj)))
console.log('-------------------------------------------')
console.log(transform(testObj))
