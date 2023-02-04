import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../service/api";
import "./sidebar.css";
const SideBar = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const fetchCats = async () => {
      const newCat = await getCategory();
      setCat(newCat);
    };
    fetchCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <div className="sideBarTitle">ABOUT ME</div>
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="about me"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut
          iusto facere reiciendis vero minima enim aut. Sit laudantium sunt
          eligendi
        </p>
      </div>
      <div className="sideBarItem">
        <div className="sideBarTitle">CATEGORIES</div>
        <ul className="sideBarList">
          {cat.map((x, i) => {
            return (
              <li className="sideBarListItem" key={i}>
                <Link to={`/?cat=${x.name}`} className="link">
                  {x.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sideBarItem">
        <div className="sideBarTitle">FOLLOW US</div>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-square-facebook" />
          <i className="sideBarIcon fa-brands fa-square-twitter" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
