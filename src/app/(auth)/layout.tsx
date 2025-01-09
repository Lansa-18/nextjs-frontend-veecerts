// import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    // <div className="w-full flex h-screen items-center p-4">
    //   <div className="flex-1 w-full flex justify-center">
    //     <div className="w-full max-w-[600px]">{children}</div>
    //   </div>
    //   <div className="flex-1 w-full h-full lg:flex items-center justify-center hidden">
    //     <div className="border max-w-[700px] p-8 rounded-3xl shadow-xl shadow-black/5">
    //       <Image
    //         src="/man-uploading-data.svg"
    //         alt="man uploading data"
    //         width={1080}
    //         height={720}
    //       />
    //     </div>
    //   </div>
    // </div>

    <section>
      {children}
    </section>
  );
};

export default Layout;
