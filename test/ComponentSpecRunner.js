import 'babel-register'
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import transform, { init } from '../src'

init(React)

const components = [
  'SimpleComponent',
  'SimpleNestedComponent',
  'CompositeComponent',
]

components.map(component => {
  const { jsx, rob, props = null } = require(`./testComponents/${component}`)
  test(component, async t => {
    const jsxInstance = shallow(React.createElement(() => jsx, props))
    const robInstance = shallow(React.createElement(() => transform(rob), props))

    t.same(jsxInstance.html(), robInstance.html())
  })
})
