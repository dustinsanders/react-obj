import isArray from 'lodash.isarray'

const transform = ({ createElement }, element) => {
  const doTransform = ({ comp, children, ...props }) => {
    const transformChildren = () => {
      if (typeof children === 'string') {
        return [children]
      }
      else if (isArray(children)) {
        return children.map(child => doTransform(child))
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

  return doTransform(element)
}

export default transform
