import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { url } from "../service/api";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const username = useSelector((state) => state.user.username);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      username,
    };
    if (file) {
      const data = new FormData();
      // const filename = Date.now() + file.name;
      // data.append("name", filename);
      data.append("file", file);
      try {
        const fileRes = await axios.post(`${url}/upload/image`, data);
        newPost.photo = fileRes.data;
        console.log("file response", fileRes.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    try {
      const res = await axios.post(`${url}/post/create`, newPost);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className=" pt-[50px] ">
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="image"
          className="ml-[150px] w-[70vw] h-[250px] rounded-[10px] object-cover"
        />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1674530493752-719b5514a7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
          alt="image"
          className="ml-[150px] w-[70vw] h-[250px] rounded-[10px] object-cover"
        />
      )}
      <form className="ml-[150px] relative" onSubmit={submitHandler}>
        <div className="flex items-center">
          <label htmlFor="fileinput">
            <div className=" text-gray-500 text-[18px] w-[28px] h-[28px] rounded-[50%] border-solid border-[1px] border-gray-600 flex items-center justify-center cursor-pointer">
              <i className="fa-solid fa-plus"></i>
            </div>
          </label>
          <input
            type="file"
            id="fileinput"
            hidden={true}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className=" text-[30px] border-none p-[20px] w-[70vw] focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className=" text-[30px] border-none p-[20px] w-[70vw]">
          <textarea
            placeholder="Tell your story ...."
            type="text"
            className=" text-[20px] border-none p-[20px] w-[70vw] h-[100vh] focus:outline-none"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="absolute top-[50px] right-[50px] text-white bg-teal-500 p-[10px] border-none rounded-[10px] cursor-pointer text-[16px] "
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
