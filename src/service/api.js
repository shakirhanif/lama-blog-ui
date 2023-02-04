import axios from "axios";

const url = "http://localhost:3000";

export const getPosts = async (search) => {
  const res = await axios.get(`${url}/post/${search}`);
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
