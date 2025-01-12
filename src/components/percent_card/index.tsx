import React from "react";
import Image from "next/image";


interface PercentProps {
  market: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
  width: number;
  height: number;
}

const Percent: React.FC<PercentProps> = ({
  title,
  market,
  imageSrc,
  imageAlt,
  width,
  height,
  content,
}) => {
  return (
<div className="flex flex-col w-full max-w-[509.35px] h-auto space-y-6 p-5 bg-white shadow-lg rounded-3xl">
  <div className="flex gap-5 items-center">
    <div
      className="inline-flex items-center justify-center rounded-full w-[64px] h-[64px] bg-blue overflow-hidden relative"
    >
      <Image alt={imageAlt} src={imageSrc} width={width} height={height} />
    </div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{market}</h2>
  </div>
  <div>
    <h2 className="text-xl sm:text-2xl font-medium">{title}</h2>
    <p className="text-gray leading-loose text-sm sm:text-base">{content}</p>
  </div>
</div>

  );
};

export default Percent;
