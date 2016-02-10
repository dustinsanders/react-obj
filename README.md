# react-object
represent DOM elements as objects in React, alternative to jsx

## Benefits

#### One templating language
```javascript
  //jsx
  <div>
    {props.text}
  <div>

  //react-obj
  transform({
    comp: 'div'
    children: `${props.children}`
  })
```

#### Programmatically compose components inline (map, conditionals, etc)
```javascript
  const numbers = ['one', 'two', 'three']

  //jsx
  <div>
    { numbers.map(number =>
        <div key={number}>Counting to {number}</div>
    )}
  </div>

  //react-obj
  transform({
    comp: 'div',
    children: numbers.map(number => (
      comp: 'div',
      key: 'number',
      children: `Counting to ${number}`
    })),
  })
```

#### Better use of es6 operators (spread, object literals)
```javascript
  //jsx
  const Component = (props) => {
    const { text, value } = props

    return (
      <div>
        <div {...props}>
          Spread
        </div>
        <div text={text} value={value}>
          Object literals
        </div>
      </div>
    )
  }

  const Alternative = (props) => {
    const { text, value } = props

    return transform({
      comp: 'div'
      children: [
        {
          comp: 'div',
          ...props,
          children: 'Spread',
        }
        {
          comp: 'div',
          text,
          value,
          children: 'Object literals'
        }
      ]
    })
  }

```

- Javascript everywhere, no XML
- One file type
- Simple wrapper around React.createElement
- Works with existing components written in jsx
- Can use with Stateless Components, React createClass, and extending React.Component

## Negatives
- Usually more lines of code

## Usage

## TODO
- documentation and example
- Unit Test
- allow users to set tag name
- extend and export React
- better method of hooking into react (class, mixin)
- Object validator
