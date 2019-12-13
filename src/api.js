import axios from 'axios';


export const getAll = () => {
   return axios('/api/posts')
              .then(resp => resp.data);
};

export const getPost = postId => {
  return axios.get(`/api/posts/${postId}`)
              .then(resp => resp.data);
};

export const addPost = (username, postBody) => {
  return axios.post('/api/posts', { username: username, postBody: postBody})
              .then(resp => resp.data);
};

export const editPost = () => {}

export const upvote = postId => {
  return axios.post(`/api/posts/${postId}/upvote`)
              .then(resp => resp.data);
};

export const deletePost = postId => {
  return axios.delete(`/api/posts/${postId}`)
              .then(resp=>resp.data);
};


// export const getReplies = postId => {
//   return axios.get(`/api/posts/${postId}/replies`)
//               .then(resp=>resp.data);
// };

// export const getReply = () => {
//   return axios.get(`/api/posts/${postId}/replies/${replyId}`)
//               .then(resp=>resp.data);
// };

// export const deleteReply = () => {
//   return axios.delete(`/api/posts/${postId}/replies`)
//               .then(resp => resp.data);
// };3