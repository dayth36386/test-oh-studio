import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function CardSuccess() {
  return (
    <div className="w-[18rem] lg:w-[31rem] h-[31rem] bg-white rounded-xl shadow-2xl transition-all duration-300 ease-in-out p-10 flex flex-col items-center py-20">
      <IoIosCheckmarkCircleOutline className="w-30 h-30 text-gray-700" />
      <p className="text-3xl text-gray-700 text-center">Thank you!</p>
      <p className="text-2xl text-gray-500 text-center">
        We appreciate your feedback.
      </p>
    </div>
  );
}
