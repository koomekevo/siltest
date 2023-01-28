/* eslint-disable */
import TestRenderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../components/Header'
import React from 'react'

describe('Render the header', () => {
  it('Renders the header', () => {
    const header = TestRenderer.create(
      <Router>
        <Header />
      </Router>
    ).toJSON()
    expect(header).toMatchSnapshot()
  })
})
