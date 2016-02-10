import isArray from 'lodash.isarray'

let { React, createElement } = {}
const init = (...args) => {
  React = args[0]
  createElement = React.createElement
}

const transform = ({ comp, children, ...props }) => {
  if (createElement) {
    const transformChildren = () => {
      if (typeof children === 'string') {
        return [children]
      }
      else if (isArray(children)) {
        return children.map(transform)
      }

      return [null]
    }

    const toReturn = [
      comp,
      props || null,
      ...transformChildren(),
    ]

    if (!toReturn[1] && !toReturn[2]) { toReturn.pop() }

    return createElement(...toReturn)
  }

  throw new Error('react-obj must be initialized before use')
}

export { init, transform }
export default transform
