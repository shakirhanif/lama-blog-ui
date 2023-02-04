import axios from "axios";

const url = "http://localhost:3000";

export const getPosts = async () => {
  const res = await axios.get(`${url}/post`);
  return res.data;
};

export const getSinglePost = async (postId) => {
  const res = await axios.get(`${url}/post/get/${postId}`);
  return res.data;
};

export const getCategory = async () => {
  const res = await axios.get(`${url}/category/get`);
  return res.data;
};
