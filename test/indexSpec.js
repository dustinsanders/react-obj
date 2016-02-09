import test from 'ava'
import 'babel-register'
import transform, { init } from '../src'
import React from 'react'

const div = { comp: 'div' }

test('must initialize before use', async t => {
  let error = undefined
  try {
    transform(div)
  }
  catch (e) {
    error = e
  }

  t.ok(error)
})

test('does not throw error if module is initialized', async t => {
  init(React)
  try {
    transform(div)
  }
  catch (e) {
    t.fail()
  }

  t.pass()
})
