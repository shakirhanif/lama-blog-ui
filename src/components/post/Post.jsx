import { useEffect } from "react";
import { Link } from "react-router-dom";
import { url } from "../../service/api";
import "./post.css";
const Post = ({ post }) => {
  const photoUrl = `${url}/files/${post.photo}`;
  return (
    <div className="post">
      {post.photo ? (
        <img src={photoUrl} alt="post-image" className="postImage" />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
          alt="post-image"
          className="postImage"
        />
      )}

      <div className="postinfo">
        <div className="postCategories">
          {post.categories.map((x, i) => {
            return (
              <span className="postCategory" key={i}>
                {x}
              </span>
            );
          })}
        </div>
        <Link to={`/post/${post._id}`}>
          <div className="postTitle">{post.title}</div>
        </Link>
        <hr />
        <div className="postDate">
          {new Date(post.createdAt).toDateString()}
        </div>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
