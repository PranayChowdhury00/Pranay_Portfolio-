import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import postsData from "../../../public/posts.json"; // Import the JSON file containing the posts
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init();
    // You can also fetch posts from a backend API here if needed
    setPosts(postsData); // Set posts data
  }, []);

  return (
    <div id="blog" className="max-w-7xl mx-auto px-5 mt-10">
      <h1 
        className="text-3xl font-bold text-center mb-10 text-[#FF014F]" 
        data-aos="fade-down" 
        data-aos-duration="1000"
      >
        My Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="card bg-base-200 shadow-xl overflow-hidden" 
            data-aos="fade-up" 
            data-aos-duration="1000"
          >
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
              <p className="mt-4">{post.content.slice(0, 150)}...</p>
              <Link
                to={`/detailOfBlog/${post.id}`}
                className="text-blue-600 mt-4 inline-block hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;