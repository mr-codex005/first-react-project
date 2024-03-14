import BookMark from "./BookMark";
import PropTypes from "prop-types";

export default function Added({ bookMarked, totalReadTime }) {
  return (
    <div className="w-[28%]">
      <div className="p-4 border-2 border-purple-700 rounded-xl bg-purple-100">
        <h2 className="font-bold text-xl text-purple-700">
          Spent time on read : {totalReadTime} min
        </h2>
      </div>
      <div className="bg-[#ddd] mt-4 p-6 rounded-xl">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs : {bookMarked.length}
        </h2>
        <div>
          {bookMarked.map((booked, idx) => (
            <BookMark key={idx} booked={booked.title}></BookMark>
          ))}
        </div>
      </div>
    </div>
  );
}
Added.propTypes = {
  bookMarked: PropTypes.array,
  totalReadTime: PropTypes.number,
};
