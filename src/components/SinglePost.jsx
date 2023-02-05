import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getSinglePost, url } from "../service/api";

const SinglePost = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async (Id) => {
      const data = await getSinglePost(Id);
      setPost(data);
    };
    fetchPost(postId);
  }, [postId]);
  const deleteHandler = async () => {
    try {
      await axios.delete(`${url}/post/delete/${postId}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className=" p-[20px] pr-0">
        {post.photo ? (
          <img
            src={`${url}/files/${post.photo}`}
            alt="post-image"
            className="w-[100%] h-[300px] rounded-[5px] object-cover"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="post-image-city"
            className="w-[100%] h-[300px] rounded-[5px] object-cover"
          />
        )}

        <h1 className=" text-center font-['Lora',serif] text-[28px]">
          {post?.title}
          {post?.username === user?.username ? (
            <div className=" float-right text-[16px]">
              <i className=" ml-[20px] cursor-pointer text-teal-600 fa-solid fa-pen-to-square" />
              <i
                className="ml-[20px] cursor-pointer text-red-400 fa-solid fa-trash"
                onClick={deleteHandler}
              />
            </div>
          ) : null}
        </h1>
        <div className=" flex justify-between mb-[20px] text-[16px] text-[#b39656] font-['Varela Round',sans-serif]">
          <Link to={`/?username=${post.username}`} className="link">
            <div>
              Author: <b>{post.username}</b>
            </div>
          </Link>
          <div>{new Date(post.createdAt).toDateString()}</div>
        </div>
        <p className=" font-['Josefin Sans',sans-serif] text-[#666] font-[18px] leading-[25px] first-letter:ml-[20px] first-letter:text-[30px]">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
