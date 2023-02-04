import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../redux/store";
import { url } from "../../service/api.js";
import "./login.css";
const Login = () => {
  const dispatch = useDispatch();
  const { user, isFetching, error } = useSelector((state) => state);
  const userRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(actions.loginStart());
    try {
      const res = await axios.post(`${url}/user/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(actions.loginSuccess(res.data));
    } catch (err) {
      dispatch(actions.loginFailure());
    }
  };
  return (
    <div
      className="h-[calc(100vh-50px)] flex flex-col justify-center items-center bg-cover "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1595126731003-755959b6baf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <span className=" text-[50px]">Login</span>
      <form
        className=" mt-[20px] flex flex-col [&>label]:my-[10px]"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          id="username"
          placeholder="Type your username"
          ref={userRef}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="p-[10px] bg-white"
          style={{ border: "none" }}
          placeholder="Type your password"
          ref={passwordRef}
        />
        <button
          className=" mt-[20px] cursor-pointer bg-red-300 text-white rounded-lg p-[10px] hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-orange-500"
          style={{ border: "none" }}
          type="submit"
          disabled={isFetching}
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
