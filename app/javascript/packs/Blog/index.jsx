import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import PostService from '../services/post';

const { getLocalPosts } = PostService;

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Local posts', url: '#' },
  { title: 'Remote posts', url: '#' },
];

const Blog = (props) => {
  const { title, type } = props;
  const mainTitle = `${type} posts`;

  const [errors, setErrors] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await getLocalPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => setErrors(error.response.data.messages));
  };

  useEffect(() => {
    fetchPosts();
  });

  if (errors) {
    console.log(errors); // eslint-disable-line no-console
  }

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={title} sections={sections} />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title={mainTitle} posts={posts} />
          </Grid>
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
  type: 'Local',
};

Blog.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

export default Blog;
