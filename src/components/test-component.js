import React from 'react'

import PropTypes from 'prop-types'

import './test-component.css'

const TestComponent = (props) => {
  return (
    <div className="test-component-container">
      {props.children}
      <h1>{props.heading}</h1>
      <h1 className="test-component-text">{props.heading1}</h1>
    </div>
  )
}

TestComponent.defaultProps = {
  heading: 'Heading',
  heading1: 'Heading',
}

TestComponent.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default TestComponent
