import Blogs from "./Blogs";
import Added from "../Added/Added";
import { useState } from "react";

export default function Content() {
  const [bookMarked, setBookMarked] = useState([]);
  const clickMe = (names) => {
    const newBookMarked = [...bookMarked, names];
    setBookMarked(newBookMarked);
  };
  // console.log(bookMarked)

  return (
    <div className="flex justify-between max-w-7xl mx-auto mt-8">
      <Blogs clickMe={clickMe}></Blogs>
      <Added bookMarked={bookMarked}></Added>
    </div>
  );
}
