# react-obj
Represent DOM elements as objects in React, alternative to jsx.

[Github repo](https://github.com/dustinsanders/react-obj)

[npm module](https://www.npmjs.com/package/react-obj)

## Motivation
The great part of React, compared to other UI frameworks, is that it extends javascript instead of attempting to extend HTML. `react-obj` takes this approach a step further by allowing components to be created with plain javascript objects allowing for a powerful and familiar development experience. Thus not needing XML, nor another file type.

## Overview

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
    children: numbers.map(number => ({
      comp: 'div',
      key: number,
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

  //react-obj
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
#### Further Considerations
- Javascript everywhere, no XML
- One file type
- Simple wrapper around React.createElement
- Works with existing components written in jsx
- Can use with Stateless Components, React createClass, and extending React.Component

## Usage

#### Installing
`npm install react-obj`

#### Initializing
component must be initialized before using tranform
```javascript
import { init } from 'react-obj'
import React from 'react'

init(React)
```

#### Need to Know
Every object is required to have a `comp` property which represents the component that you want to render. The `comp` property can either be a string for standard elements(div, span, etc) or a react component. The other important property is `children`. The `children` property can either be a string you want rendered into the parent component, or it can be an array of further components to render. Every other property will be passed down as props.

`comp`: either a string('div', 'span') or a React Component

`children`: a string or an array of further compliant objects

#### Usage
```javascript
import transform from 'react-obj'
//No need to import react if making a stateless component since react-obj will use internally

const StatelessComponent = ({ text }) => transform({
  comp: 'div',
  className: 'my-stateless-componet',
  children: text,
})

export default StatelessComponent
```

```javascript
import transform from 'react-obj'
import React from 'react'
import StatelessComponent from './StatelessComponent'

//can be used similarly with React.createClass
class ExtendClassComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return transform({
      comp: StatelessComponent,
      text: 'Written by extending React.component',
    })
  }
}
```

## Future
- allow users to set the key in the object that represents the component
- Object validator
- possibly add better method of hooking into react (class, mixin), thus not needing to call transform directly
