import Image from "next/image";

interface LoginAuthButtonProps {
  icon: string;
  text: string;
}

export default function LoginAuthButton({ icon, text }: LoginAuthButtonProps) {
  return (
    <article className="border border-black py-4 flex items-center justify-center gap-4 rounded-[40px]">
      <Image src={icon} alt="google-logo" width={24} height={24} />
      <p className="text-black2 text-sm">{text}</p>
    </article>
  );
}
