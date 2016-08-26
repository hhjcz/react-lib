/** Created by hhj on 8/26/16. */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai'
import React from 'react'
import defExport, * as components from '../index'

describe('tabulka index', () => {

  it('exports default', () => {
    expect(Object.getPrototypeOf(defExport)).to.equal(React.Component)
  })

  it('exports tabulka components', () => {
    expect(Object.getPrototypeOf(components.Tabulka)).to.equal(React.Component)
    expect(Object.getPrototypeOf(components.Paginator)).to.equal(React.Component)
    expect(typeof components.Column).to.equal('function')
    expect(typeof components.columntValueTypes).to.equal('object')
    expect(typeof components.actionCreatersFor).to.equal('function')
  })

})
