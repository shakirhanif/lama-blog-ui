import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../service/api";
import SideBar from "./sidebar/SideBar";
import { actions } from "../redux/store";

const Settings = () => {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const updateData = {
      userId: user._id,
    };
    if (username) {
      updateData.username = username;
    }
    if (email) {
      updateData.email = email;
    }
    if (password) {
      updateData.password = password;
    }
    if (file) {
      const data = new FormData();
      data.append("file", file);
      try {
        const fileRes = await axios.post(`${url}/upload/image`, data);
        updateData.profilePic = fileRes.data;
      } catch (err) {
        console.log(err.message);
      }
    }
    try {
      const res = await axios.put(`${url}/user/update/${user._id}`, updateData);
      dispatch(actions.loginSuccess(res.data));
      setSuccess(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex">
      <div className="w-[75%] p-[20px]">
        <div className="flex items-center justify-between">
          <span className=" text-[30px] mb-[20px] text-red-400">
            Update your account
          </span>
          <span className=" text=[12px] text-red-600 cursor-pointer">
            Delete your account
          </span>
        </div>
        <form
          onSubmit={submitHandler}
          className=" flex flex-col [&>label]:mt-[20px] [&>label]:text-[20px] [&>input]:text-gray-500 [&>input]:my-[10px] [&>input]:h-[30px] [&>input:border:none;] [&>input]:border-b-[1px]"
        >
          <label>Pofile Picture</label>
          <div className="flex items-center my-[10px]">
            {user?.profilePic ? (
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : `${url}/files/${user.profilePic}`
                }
                alt="profilePic"
                className=" w-[70px] h-[70px] rounded-[20px] object-cover "
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg"
                alt="profilePic"
                className=" w-[70px] h-[70px] rounded-[20px] object-cover "
              />
            )}
            <label htmlFor="fileinput">
              <i className="text-[25px] text-white bg-red-300 rounded-[50%] ml-[10px] cursor-pointer fa-regular fa-circle-user" />
            </label>
          </div>
          <input
            type="file"
            id="fileinput"
            hidden={true}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            className=" focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            className=" focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className=" focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-[150px] [align-self:center;] [border:none;] [border-radius:10px;] bg-blue-600 text-white p-[10px] mt-[20px] cursor-pointer "
          >
            Update
          </button>
          {success ? (
            <p className=" text-green-700 text-center mt-[5px]">
              Profile updated successfully...
            </p>
          ) : null}
        </form>
      </div>
      <div className=" w-[25%]">
        <SideBar />
      </div>
    </div>
  );
};

export default Settings;
