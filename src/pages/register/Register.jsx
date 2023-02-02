const Register = () => {
  return (
    <div
      className="h-[calc(100vh-50px)] flex flex-col justify-center items-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546198632-9ef6368bef12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVnaXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60')",
      }}
    >
      <span className=" text-[50px] text-gray-300">Register</span>
      <form className=" mt-[20px] flex flex-col [&>label]:my-[10px]">
        <label htmlFor="email" className=" text-gray-300">
          Email
        </label>
        <input
          type="email"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          id="email"
          placeholder="Type your email"
        />
        <label htmlFor="email" className=" text-gray-300">
          Username
        </label>
        <input
          type="email"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          id="email"
          placeholder="Type your username"
        />
        <label htmlFor="password" className=" text-gray-300">
          Password
        </label>
        <input
          type="password"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          placeholder="Type your password"
        />
        <button
          className=" mt-[20px] cursor-pointer bg-blue-500 text-white rounded-lg p-[10px]"
          style={{ border: "none" }}
        >
          Register
        </button>
      </form>
      <button className=" absolute top-[60px] right-[20px] bg-red-300 cursor-pointer rounded-lg px-3 py-2 border-none text-white ">
        Login
      </button>
    </div>
  );
};

export default Register;
