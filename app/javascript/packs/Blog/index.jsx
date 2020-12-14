import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const sections = [
  { title: 'Local posts', url: '#' },
  { title: 'Remote posts', url: '#' },
];

const Blog = (props) => {
  const { title } = props;
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Infinite Blog" sections={sections} />
        <main>
          Blog
          {title}
          !
        </main>
      </Container>
      <Footer
        description="Front-end based on Material-UI getting-started blog"
      />
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
