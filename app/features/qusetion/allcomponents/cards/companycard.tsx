import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { useCardStore } from "~/store/cardStore";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const Card3: React.FC<Props> = ({ onChange }) => {
  const dataCompanySize = [
    "only me",
    "1-5 employees",
    "6-10 employees",
    "11-100 employees",
    "over 100 employees"
  ];
  const { nextCard, prevCard, data } = useCardStore();
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl">What's your company size?</p>
        <p>Please select one of the following options:</p>
      </div>
      <form>
        <RadioGroup
          onValueChange={(value) => {
            onChange(value);
          }}
        >
          {dataCompanySize.map((item, index) => (
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
          onClick={nextCard}
          className="w-fit"
          disabled={data.companySize === ""}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Card3;
