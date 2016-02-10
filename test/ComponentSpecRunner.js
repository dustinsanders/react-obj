import 'babel-register'
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import transform, { init } from '../src'

init(React)

const paths = [
  'SimpleComponent',
  './testComponents/SimpleNestedComponent',
  './testComponents/CompositeComponent',
]

paths.map(path => {
  const { jsx, rob, props = null } = require(path)
  test(path, async t => {
    const jsxInstance = shallow(React.createElement(() => jsx, props))
    const robInstance = shallow(React.createElement(() => transform(rob), props))

    t.same(jsxInstance.html(), robInstance.html())
  })
})
