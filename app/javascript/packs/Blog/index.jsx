import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import PropTypes from 'prop-types';

const sections = [
  { title: 'Local posts', url: '#' },
  { title: 'Remote posts', url: '#' },
]

const Blog = (props) => {
  const { title } = props;
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
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
