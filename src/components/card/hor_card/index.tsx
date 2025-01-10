import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  width: number;
  height: number;
}

const HorCard: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  imageAlt,
  className = "",
  width,
  height,
}) => {
  return (
    <div
    className={`flex flex-col items-center space-y-6 p-5 bg-white shadow-lg rounded-lg ${className}`}
  >
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray leading-loose">{content}</p>
    </div>
    <Image alt={imageAlt} src={imageSrc} width={width} height={height} />
  </div>
  )

};

export default HorCard;
