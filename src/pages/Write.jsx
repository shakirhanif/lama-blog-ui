import React from "react";

const Write = () => {
  return (
    <div className=" pt-[50px] ">
      <img
        src="https://images.unsplash.com/photo-1674530493752-719b5514a7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
        alt="image"
        className="ml-[150px] w-[70vw] h-[250px] rounded-[10px] object-cover"
      />
      <form action="" method="post" className="ml-[150px] relative">
        <div className="flex items-center">
          <label htmlFor="fileinput">
            <div className=" text-gray-500 text-[18px] w-[28px] h-[28px] rounded-[50%] border-solid border-[1px] border-gray-600 flex items-center justify-center cursor-pointer">
              <i className="fa-solid fa-plus"></i>
            </div>
          </label>
          <input type="file" id="fileinput" hidden={true} />
          <input
            type="text"
            placeholder="Title"
            autoFocus={true}
            className=" text-[30px] border-none p-[20px] w-[70vw] focus:outline-none"
          />
        </div>
        <div className=" text-[30px] border-none p-[20px] w-[70vw]">
          <textarea
            placeholder="Tell your story ...."
            type="text"
            className=" text-[20px] border-none p-[20px] w-[70vw] h-[100vh] focus:outline-none"
          />
        </div>
        <button className="absolute top-[50px] right-[50px] text-white bg-teal-500 p-[10px] border-none rounded-[10px] cursor-pointer text-[16px] ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
