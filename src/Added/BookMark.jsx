import PropsTypes from "prop-types";

export default function BookMark({ booked }) {
  return (
    <div className="bg-white p-2 rounded-xl mt-4">
      <h2 className="font-semibold text-lg">{booked}</h2>
    </div>
  );
}

BookMark.propTypes = {
  booked: PropsTypes.string,
};
