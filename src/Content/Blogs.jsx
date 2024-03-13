import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({ clickMe }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-[70%] ">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} clickMe={clickMe}></Blog>
      ))}
    </div>
  );
}
