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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const fetchPost = async (Id) => {
      const data = await getSinglePost(Id);
      setPost(data);
      setTitle(data.title);
      setDesc(data.desc);
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
  const updateHandler = async () => {
    try {
      await axios.put(`${url}/post/update/${postId}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
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
        {updateMode ? (
          <div className="mt-[5px] w-[100%]">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              className="w-[100%] font-['Lora',serif] text-[28px] text-center focus:outline-none text-gray-600"
            />
          </div>
        ) : (
          <h1 className=" text-center font-['Lora',serif] text-[28px]">
            {title}
            {post?.username === user?.username ? (
              <div className=" float-right text-[16px]">
                <i
                  className=" ml-[20px] cursor-pointer text-teal-600 fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                />
                <i
                  className="ml-[20px] cursor-pointer text-red-400 fa-solid fa-trash"
                  onClick={deleteHandler}
                />
              </div>
            ) : null}
          </h1>
        )}

        <div className=" flex justify-between mb-[20px] text-[16px] text-[#b39656] font-['Varela Round',sans-serif]">
          <Link to={`/?username=${post.username}`} className="link">
            <div>
              Author: <b>{post.username}</b>
            </div>
          </Link>
          <div>{new Date(post.createdAt).toDateString()}</div>
        </div>
        {updateMode ? (
          <textarea
            value={desc}
            rows="3"
            className="w-[100%] font-['Lora',serif] text-[17px] focus:outline-none text-gray-600"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className=" font-['Josefin Sans',sans-serif] text-[#666] font-[18px] leading-[25px] first-letter:ml-[20px] first-letter:text-[30px]">
            {desc}
          </p>
        )}
        {updateMode ? (
          <div className="flex justify-center">
            <div className="px-[20px]">
              <button
                className="cursor-pointer bg-blue-400 text-white rounded-lg px-[10px] py-[5px] hover:bg-blue-500 "
                onClick={updateHandler}
              >
                Update
              </button>
            </div>
            <div className="px-[20px]">
              <button
                onClick={() => setUpdateMode(false)}
                className="cursor-pointer bg-red-300 text-white rounded-lg px-[10px] py-[5px] hover:bg-red-400 "
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SinglePost;
