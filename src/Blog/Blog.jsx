import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";

export default function Blog({ blog, clickMe, handleAddToRead }) {
  // console.log(clickMe)
  // console.log(handleAddToRead);
  const { id, title, name, image, banner, hashtag, reading_time, posted_date } =
    blog;
  return (
    <div id={id} className="m-8 border-b-2 pb-4">
      <img className="rounded-xl" src={banner} alt="" />
      <div>
        <div className="flex item-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <img className=" w-16" src={image} alt="" />
            <div>
              <h3 className="font-bold text-2xl">{name}</h3>
              <p className="font-semibold text-[#11111199]">{posted_date}</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p>{reading_time} minutes</p>
            <button
              onClick={() => clickMe(blog)}
              className="text-xl font-extrabold text-red-500">
              <CiBookmark />
            </button>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-4xl w-[70%] m-4">{title}</h2>
      <div className="flex items-center gap-3 font-semibold text-[#11111199] m-4">
        <p>
          # <span>{hashtag[0]}</span>
        </p>
        <p>
          # <span>{hashtag[1]}</span>
        </p>
      </div>
      <button
        onClick={() => handleAddToRead(blog)}
        className="text-purple-700 font-semibold text-2xl underline">
        Mark as Read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  clickMe: PropTypes.func.isRequired,
  handleAddToRead: PropTypes.func.isRequired,
};
