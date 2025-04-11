import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import { useHomeStore } from "~/store/homeStore";

export function HomePageRender() {
  const { data, getHomeAll } = useHomeStore();
  useEffect(() => {
    getHomeAll();
    AOS.init({
      once: true,
    });
  }, []);

  const dataTag = ["Expertise", "Branding", "Design System", "Product"];
  return (
    <div className="lg:px-10 flex flex-col gap-10 w-full h-auto">
      <div className="mb-36">
        <div className="pt-70 pb-10 xl:px-60 flex justify-center items-center">
          <p
            className="text-7xl text-center font-medium leading-24"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A brand and product designer working with clients globally
          </p>
        </div>
        <div
          className="flex justify-center items-center xl:gap-x-5 xl:px-60 select-none gap-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {dataTag.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 py-3 px-3 rounded-full cursor-pointer text-center w-fit"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {data && data.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-y-12 gap-x-8 w-full p-4">
          {data?.map((item, index) => (
            <div key={index} className="w-full h-150 relative">
              {index % 2 === 0 ? (
                <img
                  src={item.url}
                  alt={`Cat ${index}`}
                  className="object-cover w-full h-full rounded-xl drop-shadow-xl"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
              ) : (
                <img
                  src={item.url}
                  alt={`Cat ${index}`}
                  className="object-cover w-full h-full rounded-xl drop-shadow-xl"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-2 p-50 bg-gray-100">
          <p
            className="text-3xl font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Data Not found
          </p>
        </div>
      )}
      <div className="w-full lg:p-50 p-30 flex justify-center items-center flex-col gap-2 text-center">
        <p
          className="text-6xl font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Let's work together.
        </p>
        <p
          className="text-6xl font-medium text-[#7f7f7f]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get in touch.
        </p>
      </div>
      <div className="w-full flex justify-between py-10 px-10">
        <p>© Dechawiwatwong 2025</p>
        <div className="flex gap-x-5">
          <a href="https://www.linkedin.com/in/dechawiwatwong-detchang-18526631a/">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/dechawiwatwong-detchang-18526631a/">
            Linkedin
          </a>
          <a href="mailto:dechawiwatwong.d@gmail.com">Mail</a>
        </div>
      </div>
    </div>
  );
}
