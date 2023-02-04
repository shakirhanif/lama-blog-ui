import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className=" posts">
      {posts.map((x, i) => {
        return <Post post={x} key={i} />;
      })}
    </div>
  );
};

export default Posts;
