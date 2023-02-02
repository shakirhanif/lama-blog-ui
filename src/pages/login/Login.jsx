import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div
      className="h-[calc(100vh-50px)] flex flex-col justify-center items-center bg-cover "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1595126731003-755959b6baf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
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
          placeholder="Type your email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          placeholder="Type your password"
        />
        <button
          className=" mt-[20px] cursor-pointer bg-red-300 text-white rounded-lg p-[10px]"
          style={{ border: "none" }}
        >
          Login
        </button>
      </form>
      <button className=" absolute top-[60px] right-[20px] bg-blue-500 cursor-pointer rounded-lg px-3 py-2 border-none text-white ">
        <Link to={"/register"} className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
