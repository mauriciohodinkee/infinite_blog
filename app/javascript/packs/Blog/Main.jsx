import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  mainLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function Main(props) {
  const loader = useRef(null);
  const classes = useStyles();
  const {
    posts, title, currentPage, setPage,
  } = props;
  const formatToMarkdown = (post) => (`# ${post.title}

  ${post.content}`);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, observerOptions);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <Grid item xs={12} md={12}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Markdown className={classes.markdown} key={index}>
          { formatToMarkdown(post)}
        </Markdown>
      ))}

      <Button
        color="inherit"
        key={1}
        className={classes.mainLink}
        ref={loader}
      >
        Load More
      </Button>

    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Main;
