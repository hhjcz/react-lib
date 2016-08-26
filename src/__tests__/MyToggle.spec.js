/** Created by hhj on 8/26/16. */
/* eslint-disable no-unused-expressions, no-unused-vars, import/no-extraneous-dependencies */
import { expect } from 'chai'
import sinon from 'sinon'
import React from 'react'
import sd from 'skin-deep'
import MyToggle from '../MyToggle'

describe(' MyToggle component', () => {
  const shallowRender = (props) => sd.shallowRender(React.createElement(MyToggle, props))

  it('renders with default props', () => {
    const tree = shallowRender()
    expect(typeof tree.type).to.equal('function')
  })

})
