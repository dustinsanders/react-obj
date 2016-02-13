import './_setup'
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

const shallowRender = (comp, props) =>
  shallow(React.createElement(comp, props))

const testRenderedHtml = (description, { jsx, rob, props = null }) => {
  test(description, async t =>
    t.same(shallowRender(jsx, props).html(), shallowRender(rob, props).html())
  )
}

//Testing html equality
[
  'CompositeComponent',
  'SimpleComponent',
  'SimpleNestedComponent',
  'SimplePropsComponent',
  'ThirdPartyComponent',
].map(componentName =>
  testRenderedHtml(componentName, require(`./testComponents/${componentName}`))
)

//Testing Event Handlers
test('onClick should fire for SimplePropsComponent', async t => {
  const { props, rob } = require('./testComponents/SimplePropsComponent')
  const instance = shallowRender(rob, props)
  t.is(props.onClick.called, false)
  instance.find('span').simulate('click')
  t.is(props.onClick.called, true)
})
