import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

export default function Blogs({ clickMe, handleAddToRead }) {
  // console.log(handleAddToRead)
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("people.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-[70%] ">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          clickMe={clickMe}
          handleAddToRead={handleAddToRead}></Blog>
      ))}
    </div>
  );
}

Blogs.propTypes ={
  clickMe: PropTypes.func,
  handleAddToRead: PropTypes.func
}