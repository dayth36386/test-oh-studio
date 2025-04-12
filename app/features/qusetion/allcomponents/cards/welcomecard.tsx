import { AiOutlineEnter } from "react-icons/ai";

import { Button } from "~/components/ui/button";
import { useCardStore } from "~/store/cardStore";

const Card1: React.FC = () => {
  const { nextCard } = useCardStore();
  return (
    <div
      className="w-full h-full flex flex-col gap-2"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          nextCard();
        }
      }}
    >
      <div className="flex flex-col gap-2">
        <p className="text-xl">Welcome!</p>
        <p>Thanks for proving your feedback, let's go!</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="default" onClick={nextCard} className="w-fit">
          Next
        </Button>
        <div className="flex gap-1 items-center">
          <p>Press Enter</p>
          <AiOutlineEnter />
        </div>
      </div>
    </div>
  );
};

export default Card1;
