import React from "react";

const SinglePost = () => {
  return (
    <div>
      <div className=" p-[20px] pr-0">
        <img
          src="https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
          alt="post-image-city"
          className="w-[100%] h-[300px] rounded-[5px] object-cover"
        />
        <h1 className=" text-center font-['Lora',serif] text-[28px]">
          Lorem ipsum dolor sit amet
          <div className=" float-right text-[16px]">
            <i className=" ml-[20px] cursor-pointer text-teal-600 fa-solid fa-pen-to-square" />
            <i className="ml-[20px] cursor-pointer text-red-400 fa-solid fa-trash" />
          </div>
        </h1>
        <div className=" flex justify-between mb-[20px] text-[16px] text-[#b39656] font-['Varela Round',sans-serif]">
          <div>
            Author: <b>Shakir</b>
          </div>
          <div>1 hour ago</div>
        </div>
        <p className=" font-['Josefin Sans',sans-serif] text-[#666] font-[18px] leading-[25px] first-letter:ml-[20px] first-letter:text-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod
          molestias accusamus, atque, voluptatem iste labore corrupti voluptas
          iure nihil quibusdam, saepe magnam sapiente velit exercitationem eaque
          omnis illum vel? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia, ducimus! Impedit accusantium nostrum iure sit
          voluptates obcaecati explicabo fugiat maxime autem, est vitae aliquam.
          Ipsa vel numquam atque sed id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto, in. Cupiditate, officia placeat tempore
          dolore alias, harum, obcaecati animi quaerat voluptatum est ad
          corrupti sunt! Reprehenderit repellendus sapiente sunt assumenda!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
