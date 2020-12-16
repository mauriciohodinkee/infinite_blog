import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

function Main(props) {
  const classes = useStyles();
  const { posts, title, currentPage, setPage } = props;
  const formatToMarkdown = (post) => (`# ${post.title}

  ${post.content}`);

  return (
    <Grid item xs={12} md={8}>
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
        className={classes.toolbarLink}
        onClick={() => setPage(() => currentPage + 1)}
      >
        Next
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
