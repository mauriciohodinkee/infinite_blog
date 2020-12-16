import Api from './api';

const PostService = {
  getLocalPosts: (page) => Api.get(`/local_posts?page=${page}`),
  getRemotePosts: (page) => Api.get(`/remote_posts?page=${page}`),
};

export default PostService;
