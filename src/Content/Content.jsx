import Blogs from "./Blogs";
import Added from "../Added/Added";
import { useState } from "react";

export default function Content() {
  // set item in bookmarked
  const [bookMarked, setBookMarked] = useState([]);

  const ids = bookMarked.map((marks) => marks.id);

  const clickMe = (blog) => {
    const newBookMarked = [...bookMarked, blog];

    // for unique bookmark
    if (ids.includes(blog.id)) {
      return;
    }
    setBookMarked(newBookMarked);
  };
  //  set item in and add read time
  const [reads, addToRead] = useState([]);

  const readTime = reads.map((readT) => readT.readingTime);

  let totalReadTime = 0;
  for (let i = 0; i < readTime.length; i++) {
    totalReadTime += readTime[i];
  }
  
  const handleAddToRead = (blog) => {
    const newReads = [...reads, blog];
    addToRead(newReads);

    // remove item form bookMark when mark as read button clicked
    const remainingBookMarks = bookMarked.filter(bookMark => bookMark.id !== blog.id)
    setBookMarked(remainingBookMarks)
  };

  return (
    <div className="flex justify-between max-w-7xl mx-auto mt-8">
      <Blogs clickMe={clickMe} handleAddToRead={handleAddToRead}></Blogs>
      <Added bookMarked={bookMarked} totalReadTime={totalReadTime}></Added>
    </div>
  );
}
