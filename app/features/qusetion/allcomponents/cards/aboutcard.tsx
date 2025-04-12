import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { useCardStore } from "~/store/cardStore";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const Card4: React.FC<Props> = ({ onChange }) => {
  const dataAbout = [
    "Recommendation",
    "Social Media",
    "Ads",
    "Google Search",
    "In a Podcast"
  ];
  const { setCards, prevCard, data } = useCardStore();
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl">How did you hear about us first?</p>
        <p>Please select one of the following options:</p>
      </div>
      <form>
        <RadioGroup
          onValueChange={(value) => {
            onChange(value);
          }}
        >
          {dataAbout.map((item, index) => (
            <Label
              key={index}
              htmlFor={item}
              className=" flex items-center border border-black py-3 px-2 rounded-md w-full"
            >
              <RadioGroupItem
                value={item}
                id={item}
                className="border border-black bg-white"
              />
              {item}
            </Label>
          ))}
        </RadioGroup>
      </form>
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={prevCard} className="w-fit">
          Back
        </Button>
        <Button
          variant="default"
          onClick={() => setCards("waiting")}
          className="w-fit"
          disabled={data.about === ""}
        >
          finish
        </Button>
      </div>
    </div>
  );
};

export default Card4;
