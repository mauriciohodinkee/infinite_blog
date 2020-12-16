import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import PostService from '../services/post';

const { getLocalPosts, getRemotePosts } = PostService;

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const sections = [
  { title: 'Local posts', postType: 'local' },
  { title: 'Remote posts', postType: 'remote' },
];

const Blog = (props) => {
  const { title } = props;
  const [errors, setErrors] = useState();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [postType, setPostType] = useState('local');
  const mainTitle = `${postType} posts`;

  const fetchPosts = async () => {
    let fetcher = () => undefined;
    if (postType === 'local') {
      fetcher = getLocalPosts;
    } else if (postType === 'remote') {
      fetcher = getRemotePosts;
    }

    await fetcher(page)
      .then((res) => setPosts(() => posts.concat(res.data)))
      .catch((error) => setErrors(() => error.response.data.messages));
  };

  useEffect(() => {
    setPage(() => 1);
    setPosts(() => []);
  }, [postType]);

  useEffect(() => {
    fetchPosts();
  }, [postType, page]);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={title} sections={sections} setPostType={setPostType} />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Paper className={classes.paper}>{errors}</Paper>
            <Main title={mainTitle} posts={posts} setPage={setPage} />
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
};

Blog.propTypes = {
  title: PropTypes.string,
};

export default Blog;
