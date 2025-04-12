import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline
} from "react-icons/io";

import { useCardStore } from "~/store/cardStore";

export default function CardShowInformation() {
  const { data } = useCardStore();
  return (
    <div className="w-[18rem] lg:w-[31rem] h-[31rem] bg-white rounded-xl shadow-2xl transition-all duration-300 ease-in-out p-10 flex flex-col justify-between gap-2">
      <div className="grid gap-3">
        {data.role && data.companySize && data.about ? (
          <div className="flex items-center gap-2">
            <IoIosCheckmarkCircleOutline className="w-6 h-6 text-gray-500" />
            <p className="text-base text-gray-500 font-medium">Welcome Card</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <IoIosCloseCircleOutline className="w-6 h-6 text-gray-500" />
            <p className="text-base text-gray-500 font-medium">Welcome Card</p>
          </div>
        )}
        <div className="grid gap-3 text-md text-gray-500 font-medium">
          <div>
            <p>What's your role?</p>
            <p className="text-lg text-gray-600">
              {data.role ? data.role : "-"}
            </p>
          </div>
          <div>
            <p>What's your company size?</p>
            <p className="text-lg text-gray-600">
              {data.companySize ? data.companySize : "-"}
            </p>
          </div>
          <div>
            <p>How did you hear about us first?</p>
            <p className="text-lg text-gray-600">
              {data.about ? data.about : "-"}
            </p>
          </div>
        </div>
      </div>
      {data.role && data.companySize && data.about ? (
        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircleOutline className="w-6 h-6 text-gray-500" />
          <p className="text-base px-1.5 bg-gray-100 rounded-full font-medium text-gray-500">
            Completed
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <IoIosCloseCircleOutline className="w-6 h-6 text-gray-500" />
          <p className="text-base px-1.5 bg-gray-100 rounded-full font-medium text-gray-500">
            Incomplete
          </p>
        </div>
      )}
    </div>
  );
}
