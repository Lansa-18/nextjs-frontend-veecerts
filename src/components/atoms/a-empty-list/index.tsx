interface Props {
  label: string;
}

const EmptyList: React.FC<Props> = ({ label }) => {
  return (
    <div className="border rounded-2xl w-full aspect-video flex items-center justify-center text-muted-foreground font-medium">
      <span>{label}</span>
    </div>
  );
};

export default EmptyList;
