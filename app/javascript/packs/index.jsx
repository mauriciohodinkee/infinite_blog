import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Blog = props => (
  <div>Blog {props.title}!</div>
)

Blog.defaultProps = {
  title: 'Infinite Scrolling'
}

Blog.propTypes = {
  title: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Blog title="InfiniteBlog by Mauricio Vieira" />,
    document.getElementById('root'),
  )
})
