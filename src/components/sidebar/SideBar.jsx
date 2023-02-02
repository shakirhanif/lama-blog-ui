import "./sidebar.css";
const SideBar = () => {
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
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Sports</li>
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
