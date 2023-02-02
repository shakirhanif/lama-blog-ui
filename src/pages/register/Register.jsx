import "./login.css";
const Login = () => {
  return (
    <div
      className="h-[calc(100vh-50px)] flex flex-col justify-center items-center bg-auto"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
      }}
    >
      <span className=" text-[50px]">Login</span>
      <form className=" mt-[20px] flex flex-col [&>label]:my-[10px]">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
        />
        <button
          className=" mt-[20px] cursor-pointer bg-red-300 text-white rounded-lg p-[10px]"
          style={{ border: "none" }}
        >
          Login
        </button>
      </form>
      <button className=" absolute top-[60px] right-[20px] bg-blue-500 cursor-pointer rounded-lg px-3 py-2 border-none text-white ">
        Register
      </button>
    </div>
  );
};

export default Login;
