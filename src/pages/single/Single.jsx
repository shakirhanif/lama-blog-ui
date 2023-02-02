import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/SinglePost";
const Single = () => {
  return (
    <div className="w-[100%] flex">
      <div className="w-[75%]">
        <SinglePost />
      </div>
      <div className="w-[25%]">
        <SideBar />
      </div>
    </div>
  );
};

export default Single;
