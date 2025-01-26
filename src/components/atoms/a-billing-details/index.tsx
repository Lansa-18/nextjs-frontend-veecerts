import Image from "next/image";

interface BillingDetailsProps {
    userName: string
    companyName: string
    emailAddress: string
    vatNum: string

}

export default function BillingDetails({userName, companyName, emailAddress, vatNum}: BillingDetailsProps) {
  return (
    <article className="font-poppins mt-[18px] flex items-start justify-between bg-greyish-white2 rounded-[12px] py-4 px-7">
      <div className="space-y-3">
        <h3 className="text-[14px] leading-[19.6px] text-grey5">
          {userName}
        </h3>
        <p className="text-grey4 text-[12px] leading-[18px]">
          Company Name: <strong>{companyName}</strong>
        </p>
        <p className="text-grey4 text-[12px] leading-[18px]">
          Email Address: <strong>{emailAddress}</strong>
        </p>
        <p className="text-grey4 text-[12px] leading-[18px]">
          VAT NUMBER: <strong>{vatNum}</strong>
        </p>
      </div>

      <section className="flex h-full items-center border-red-500 gap-10">
        <div className="flex items-center gap-1">
          <Image
            src="/delete.svg"
            width={15}
            height={15}
            alt="delete-icon"
            className="object-contain"
          />
          <p className="text-red5 text-[12px] leading-[15px] uppercase">
            Delete
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/edit.svg"
            width={15}
            height={15}
            alt="edit-icon"
            className="object-contain"
          />
          <p className="text-grey7 text-[12px] leading-[15px] uppercase">
            Edit
          </p>
        </div>
      </section>
    </article>
  );
}
