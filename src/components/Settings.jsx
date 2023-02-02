import React from "react";
import SideBar from "./sidebar/SideBar";

const Settings = () => {
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
        <form className=" flex flex-col [&>label]:mt-[20px] [&>label]:text-[20px] [&>input]:text-gray-500 [&>input]:my-[10px] [&>input]:h-[30px] [&>input:border:none;] [&>input]:border-b-[1px]">
          <label>Pofile Picture</label>
          <div className="flex items-center my-[10px]">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
              alt=""
              className=" w-[70px] h-[70px] rounded-[20px] object-cover "
            />
            <label htmlFor="fileinput">
              <i className="text-[25px] text-white bg-red-300 rounded-[50%] ml-[10px] cursor-pointer fa-regular fa-circle-user" />
            </label>
          </div>
          <input type="file" id="fileinput" hidden={true} />
          <label>Username</label>
          <input type="text" placeholder="Shakir" />
          <label>Email</label>
          <input type="email" placeholder="user@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button
            type="submit"
            className="w-[150px] [align-self:center;] [border:none;] [border-radius:10px;] bg-blue-600 text-white p-[10px] mt-[20px] cursor-pointer "
          >
            Update
          </button>
        </form>
      </div>
      <div className=" w-[25%]">
        <SideBar />
      </div>
    </div>
  );
};

export default Settings;
