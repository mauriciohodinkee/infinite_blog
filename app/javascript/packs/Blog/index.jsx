import React from 'react';
import PropTypes from 'prop-types';

const Blog = (props) => {
  const { title } = props;
  return (
    <div>
      Blog
      {title}
      !
    </div>
  );
};

Blog.defaultProps = {
  title: 'Infinite Scrolling',
};

Blog.propTypes = {
  title: PropTypes.string,
};

export default Blog;
