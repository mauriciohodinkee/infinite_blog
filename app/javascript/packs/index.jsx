import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Blog title="InfiniteBlog by Mauricio Vieira" />,
    document.getElementById('root'),
  );
});
