import React, { useEffect, useState } from "react";

import Card4 from "./cards/aboutcard";
import CardShowInformation from "./cards/cardshowinformation";
import CardSuccess from "./cards/cardsuccess";
import Card3 from "./cards/companycard";
import Card2 from "./cards/rolecard";
import Card1 from "./cards/welcomecard";

import { useCardStore } from "~/store/cardStore";
import type { IQuestion } from "~/types/gobal";

const CardStack: React.FC = () => {
  const { activeIndex, setData, stateCards, setCards } = useCardStore();
  const [formData, setFormData] = useState<IQuestion>({
    role: "",
    companySize: "",
    about: ""
  });

  const updateField = (field: keyof IQuestion, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const cards = [
    <Card1 key="Welcome Card" />,
    <Card2
      key="role"
      value={formData.companySize}
      onChange={(val) => updateField("role", val)}
    />,
    <Card3
      key="CompanySize"
      value={formData.companySize}
      onChange={(val) => updateField("companySize", val)}
    />,
    <Card4
      key="About"
      value={formData.companySize}
      onChange={(val) => updateField("about", val)}
    />
  ];
  useEffect(() => {
    setData(formData);
    if (stateCards === "waiting") {
      setTimeout(() => {
        setCards("show");
      }, 3000);
    }
  }, [formData, stateCards]);
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      {stateCards == "" ? (
        <div className="relative w-[18rem] lg:w-[31rem] h-[31rem]">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            const isBehind = index > activeIndex;
            return (
              <div
                key={index}
                className="absolute w-full h-full rounded-xl shadow-2xl transition-all duration-300 ease-in-out bg-white p-10 flex items-center justify-center text-xl font-bold border"
                style={{
                  top: `${(index - activeIndex) * -20}px`,
                  left: `${(index - activeIndex) * 0}px`,
                  zIndex: cards.length - index,
                  opacity: isActive || isBehind ? 1 : 0,
                  transform: `scale(${1 - (index - activeIndex) * 0.03})`,
                  pointerEvents: isActive ? "auto" : "none"
                }}
              >
                {card}
              </div>
            );
          })}
        </div>
      ) : stateCards === "waiting" ? (
        <CardSuccess />
      ) : stateCards === "show" ? (
        <CardShowInformation />
      ) : null}
    </div>
  );
};

export default CardStack;
