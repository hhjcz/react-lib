/** Created by hhj on 8/26/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import React from 'react'
import * as components from '../index'

describe('index', () => {
  it('exports components', () => {
    expect(Object.getPrototypeOf(components.MyAutoComplete)).to.equal(React.Component)
    expect(Object.getPrototypeOf(components.MyCheckbox)).to.equal(React.Component)
    expect(Object.getPrototypeOf(components.MyDraggable)).to.equal(React.Component)
    expect(Object.getPrototypeOf(components.MyIcon)).to.equal(React.Component)
    expect(Object.getPrototypeOf(components.MyToggle)).to.equal(React.Component)
    expect(Object.getPrototypeOf(components.Tabulka)).to.equal(React.Component)
  })

})
