import React from 'react'
import Image from 'next/image'

interface StepsProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    content: string;
    className?: string;
    width: number;
    height: number;
}

const Steps: React.FC<StepsProps> = ({
    imageSrc,
    imageAlt,
    title,
    content,
    width,
    height,
    className = ''
}) => {
    return(
        <div className='flex-col space-y-6 flex items-center'>
            <div className={`inline-flex items-center justify-center rounded-full w-20 h-20 bg-blue overflow-hidden relative ${className}`}>   
                <Image alt={imageAlt} src={imageSrc} width={width} height={height} />
            </div>
            <h2 className='font-bold text-xl'>{title}</h2>
            <p className='text-center w-[311px]'>{content}</p>
        </div>
    )
}

export default Steps;
