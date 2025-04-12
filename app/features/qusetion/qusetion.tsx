import { useEffect } from "react";
import AOS from "aos";

import CardStack from "./allcomponents/cardstack";

export function QusetionPageRender() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <CardStack />
    </div>
  );
}
