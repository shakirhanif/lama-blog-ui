import React, { useEffect, useState } from "react";
import { getPosts } from "../../service/api";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async (srch) => {
      const newPosts = await getPosts(srch);
      setPosts(newPosts);
    };
    fetchPosts(search);
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
