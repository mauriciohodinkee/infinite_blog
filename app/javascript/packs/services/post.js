import Api from './api';

const PostService = {
  getLocalPosts: () => Api.get('/local_posts/'),
  getRemotePosts: () => Api.get('/remote_posts/'),
};

export default PostService;
