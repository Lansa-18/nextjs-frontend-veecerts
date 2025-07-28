import Image from "next/image";
import React from "react";

interface Props {
  fileName: string,
  savedDate: string
}

const DocsCard: React.FC<Props> = ({ fileName, savedDate }) => {
  const fileIcons = {
    ppt: "/csv1.svg",
    csv: "/csv.svg",
    pdf: "/csv3.svg",
    doc: "/csv2.svg",
  };

  const fileExtension = fileName.split(".").pop() ?? "";

  const fileIcon = fileIcons[fileExtension as keyof typeof fileIcons] || "/csv.svg";

  return (
    <div className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md bg-white gap-4">
      <div className='border border-gray-300 p-5 rounded-lg'>
        <Image
          src={fileIcon}
          alt={`${fileExtension} icon`}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>

      <div className='text-center space-y-2'>
        <h3 className="text-lg font-semibold">{fileName}</h3>
        <p className="text-sm text-gray-500">{savedDate}</p>
      </div>
    </div>
  );
};

export default DocsCard;
