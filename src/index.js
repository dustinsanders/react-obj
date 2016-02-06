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
              h1: { children: 'h1 text' },
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

const transform = (React, element) => {
  return _.keys(element).map(key => {
    // TODO use desctructoring
    const current = element[key]
    const children =
      typeof current.children === 'string'
      ? current.children || null
      : _.flatten((current.children || []).map(child => transform(React, child)))

    const toReturn = [
      key,
      current.props,
      children.length ? children : null,
    ]

    if (!toReturn[1] && !toReturn[2]) {
      toReturn.pop()
    }

    return React.createElement.apply(undefined, toReturn)
  })
}

module.exports = (React, obj) => {
  const test = transform(React, obj)[0]
  console.log('test', test)
  return test
}

// console.log(JSON.stringify(transform(testObj)[0]))
// console.log('-------------------------------------------')
// console.log(JSON.stringify(transform({}, testObj)[0]))
// console.log(transform({}, testObj)[0])
