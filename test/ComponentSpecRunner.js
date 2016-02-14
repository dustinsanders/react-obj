import './_setup'
import React from 'react'
import test from 'ava'
import { mount, shallow } from 'enzyme'
import { stub } from 'sinon'

const shallowRender = (comp, props) =>
  shallow(React.createElement(comp, props))

const fullRender = (comp, props) =>
  mount(React.createElement(comp, props))

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
  const { rob } = require('./testComponents/SimplePropsComponent')
  const props = {
    onClick: stub(),
  }
  const instance = shallowRender(rob, props)
  t.false(props.onClick.called)
  instance.find('span').simulate('click')
  t.true(props.onClick.called)
})

//Testing lifecycle methods
test('lifecycle methods should fire on full render', async t => {
  const { rob } = require('./testComponents/LifeCycleComponent')
  const props = {
    didMount: stub()
  }
  t.false(props.didMount.called)
  const instance = fullRender(rob, props)
  t.true(props.didMount.called)
})
