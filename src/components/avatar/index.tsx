import Image from "next/image";

export default function Avatar() {
    return (
     <div className="flex items-center space-x-[10px]">
    <Image className="w-10 h-10 rounded-full" src="/Profile image.svg" alt="" width={40} height={40} />
    <div className="font-medium dark:text-white space-y-[2px]">
        <div>Boluwatife</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Company Manager</div>
    </div>
</div>
   
    )
}