import { cn } from "@/lib/utils";

interface Props {
  label: string;
  className?: string;
}

const EmptyList: React.FC<Props> = ({ label, className }) => {
  return (
    <div
      className={cn(
        "border rounded-2xl w-full aspect-[16/4] flex items-center justify-center text-muted-foreground font-medium",
        className,
      )}
    >
      <span>{label}</span>
    </div>
  );
};

export default EmptyList;
