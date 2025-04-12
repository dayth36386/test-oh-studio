import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { useCardStore } from "~/store/cardStore";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const Card2: React.FC<Props> = ({ onChange }) => {
  const dataRole = [
    "Founder",
    "Execuitive",
    "Product Manager",
    "Product Owner",
    "Software Engineer"
  ];
  const { nextCard, data } = useCardStore();
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <p className="text-xl">What's your role?</p>
        <p>Please select one of the following options:</p>
      </div>
      <form>
        <RadioGroup
          onValueChange={(value) => {
            onChange(value);
          }}
        >
          {dataRole.map((item, index) => (
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
      <div className="flex justify-end items-center">
        <Button
          variant="default"
          onClick={nextCard}
          className="w-fit"
          disabled={data.role === ""}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Card2;
