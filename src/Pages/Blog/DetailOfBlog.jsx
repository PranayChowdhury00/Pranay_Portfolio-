import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsData from "../../../public/posts.json";

export default function DetailOfBlog() {
  const {id}  = useParams(); // Get postId from URL
  console.log(id)
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Ensure the ID comparison works correctly
    const selectedPost = postsData.find((post) => post.id === Number(id));

    if (selectedPost) {
      setPost(selectedPost);
    } else {
      setPost("not-found"); // Handle when no post matches
    }
  }, [id]);

  if (post === "not-found") {
    return <div className="text-center text-[#FF014F] text-lg mt-10">Post Not Found!</div>;
  }

  if (!post) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 mt-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">
        By {post.author} on {post.date}
      </p>
      <div className="mt-6">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
