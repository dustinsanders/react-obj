import isArray from 'lodash.isarray'

let createElement = undefined
const init = (React) => createElement = React.createElement

const transform = ({ comp, children, ...props }) => {
  if (createElement) {
    const transformChildren = () => {
      if (typeof children === 'string') {
        return [children]
      }
      else if (isArray(children)) {
        return children.map(child => transform(child))
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

  console.error('rob must be initiazlies before use')
}

export { init, transform }
export default transform
