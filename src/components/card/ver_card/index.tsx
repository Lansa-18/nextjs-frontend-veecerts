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

const VerCard: React.FC<CardProps> = ({
  title,
  content,
  imageAlt,
  imageSrc,
  className = "",
  width,
  height,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center space-x-6 p-5 bg-white shadow-lg rounded-lg ${className}`}
    >
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray leading-loose">{content}</p>
      </div>
      <Image src={imageSrc} alt={imageAlt} width={width} height={height} />
    </div>
  );
};

export default VerCard;
