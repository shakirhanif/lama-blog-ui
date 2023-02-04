import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../redux/store";
import "./topbar.css";

const Topbar = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  const user = state.user;
  const logoutHandler = () => {
    dispatch(actions.logout());
  };
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
            <li className="topListItem" onClick={logoutHandler}>
              {user ? "LOGOUT" : null}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            user.profilePic ? (
              <img
                src={user.profilePic}
                alt="profilePic"
                className="topImage"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg"
                alt="profilePic"
                className="topImage"
              />
            )
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
