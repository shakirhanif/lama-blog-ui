import axios from "axios";

const url = "http://localhost:3000";
//POST-API
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
//USER-API
export const registerUser = async (user) => {
  try {
    const res = await axios.post(`${url}/user/register`, user);
    return res.data;
  } catch (err) {
    return { error: true };
  }
};
