import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitlesm">React & Node</div>
        <div className="headerTitlelg">Blog</div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=60"
        alt="background-image"
        className="backgroundImage"
      />
    </div>
  );
};

export default Header;
