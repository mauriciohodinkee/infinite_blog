import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';

const Blog = (props) => {
  const { title } = props;
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          Blog
          {title}
          !
        </main>
      </Container>
    </>
  );
};

Blog.defaultProps = {
  title: 'Infinite Scrolling',
};

Blog.propTypes = {
  title: PropTypes.string,
};

export default Blog;
