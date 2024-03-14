import React from 'react'

import PropTypes from 'prop-types'

import './bradley.css'

const Bradley = (props) => {
  return (
    <div className="bradley-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Bradley.defaultProps = {
  text: 'Text',
}

Bradley.propTypes = {
  text: PropTypes.string,
}

export default Bradley
