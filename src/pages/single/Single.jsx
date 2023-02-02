import { useParams } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/SinglePost";
const Single = () => {
  const { postId } = useParams();
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
