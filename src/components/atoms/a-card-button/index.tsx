import { Button } from "@/components/ui/button";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CardButton: React.FC<Props> = ({ children, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="h-auto w-full max-w-[200px] p-0 rounded-xl"
      variant="ghost"
    >
      <div className="p-4 border w-full rounded-xl items-start flex flex-col gap-2 font-semibold">
        <div className="text-2xl">{icon}</div>
        <div>{children}</div>
      </div>
    </Button>
  );
};

export default CardButton;
