// import SubscriptionPackages from "@/components/molecules/m-subscription-packages";
import BillingDetails from "@/components/atoms/a-billing-details";
import { H2 } from "@/components/ui/typography";
import Image from "next/image";

const BillingPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 bg-[#f2f5f9] min-h-screen">
      <H2>Billing</H2>
      {/* <SubscriptionPackages /> */}
      <main>
        <section>
          <div>
            <Image
              src="/Credit Card.png"
              alt="credit-card"
              width={450}
              height={240}
            />
          </div>
        </section>

        <section className="font-poppins text-[14px] font-bold leading-[19.6px] bg-white rounded-[1.5px] mt-[18px] p-[22px]">
          <div className="flex justify-between items-center">
            <h2>Payment Method</h2>
            <button className="uppercase px-[14px] rounded-[13px] py-[10px] bg-1 flex justify-center items-center text-center text-white text-[10px]">
              Add a new card
            </button>
          </div>

          <article className="flex gap-10 mt-6">
            <div className="flex items-center rounded-[15px] basis-[50%] border px-[20px] py-[14px] border-grey-border2">
              <Image
                src="/Mastercard Icon.svg"
                alt="mastercard-icon"
                width={21}
                height={13.3}
              />
              <input
                className="outline-none border-none px-[15px] w-full text-[14px] leading-[19.6px] text-grey2"
                placeholder="7812 2139 0823 XXXX"
              />
              <Image src="/edit.svg" alt="edit-icon" width={12} height={12} />
            </div>
            <div className="flex items-center rounded-[15px] basis-[50%] border px-[20px] py-[14px] border-grey-border2">
              <Image
                src="/Visa Icon.svg"
                alt="mastercard-icon"
                width={21}
                height={13.3}
              />
              <input
                className="outline-none border-none px-[15px] w-full text-[14px] leading-[19.6px] text-grey2"
                placeholder="7812 2139 0823 XXXX"
              />{" "}
              <Image src="/edit.svg" alt="edit-icon" width={12} height={12} />
            </div>
          </article>
        </section>

        <section className="bg-white font-poppins mt-6 p-[21px] rounded-[15px]">
          <h2 className="text-[18px] font-bold text-grey7 leading-[25.2px]">
            Billing Information
          </h2>

          <BillingDetails
            userName="Andrew Jones"
            companyName="Viking Burrito"
            emailAddress="oliver@burrito.com"
            vatNum="OEU323424238423D"
          />
          <BillingDetails
            userName="Andrew Jones"
            companyName="Viking Burrito"
            emailAddress="oliver@burrito.com"
            vatNum="OEU323424238423D"
          />
          <BillingDetails
            userName="Andrew Jones"
            companyName="Viking Burrito"
            emailAddress="oliver@burrito.com"
            vatNum="OEU323424238423D"
          />
        </section>
      </main>
    </div>
  );
};

export default BillingPage;
