import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZyUyMHBvc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="post-image"
        className="postImage"
      />
      <div className="postinfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <div className="postTitle">Lorem ipsum dolor sit amet</div>
        <hr />
        <div className="postDate">1 hour ago</div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eaque ad
        aperiam dicta rem porro vitae aspernatur totam fuga, quos enim possimus
        qui dolor sit voluptatum cumque officia quaerat voluptatibus! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Officia natus
        blanditiis excepturi cumque veritatis alias quae aspernatur,
        necessitatibus eligendi. Corrupti voluptas quidem consectetur porro sunt
        dolor nihil atque quis dicta! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Libero tempore possimus quibusdam magni! Est ad
        sapiente excepturi? Iste quas sequi magnam explicabo minus, aliquid
        blanditiis tempora impedit sunt omnis corporis?
      </p>
    </div>
  );
};

export default Post;
