import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = ({ children }) => {
  const user = true;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook" />
          <i className="topIcon fa-brands fa-square-twitter" />
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/"} className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to={"/about"} className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to={"/contact"} className="link">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link to={"/write"} className="link">
                WRITE
              </Link>
            </li>
            <li className="topListItem">{user ? "LOGOUT" : null}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
              alt="profilePic"
              className="topImage"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to={"/login"}>Login</Link>
              </li>
              <li className="topListItem">
                <Link to={"/register"}>Register</Link>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fa-solid fa-magnifying-glass" />
        </div>
      </div>
      {children}
    </>
  );
};

export default Topbar;
