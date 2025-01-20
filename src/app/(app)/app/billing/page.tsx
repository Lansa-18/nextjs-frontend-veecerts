// import SubscriptionPackages from "@/components/molecules/m-subscription-packages";
import { H2 } from "@/components/ui/typography";
import Image from "next/image";

const BillingPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 bg-[#f2f5f9] min-h-screen">
      <H2>Billing</H2>
      {/* <SubscriptionPackages /> */}
      <main>
        <article>
          <div>
            <Image
              src="/Credit Card.png"
              alt="credit-card"
              width={450}
              height={240}
            />
          </div>
        </article>
        <article className="font-poppins text-[14px] font-bold leading-[19.6px] bg-white rounded-[1.5px] mt-[18px] p-[22px]">
          <div className="flex justify-between items-center">
            <h2>Payment Method</h2>
            <button className="uppercase px-[14px] rounded-[13px] py-[10px] bg-1 flex justify-center items-center text-center text-white text-[10px]">
              Add a new card
            </button>
          </div>
          <div>

          </div>
        </article>
      </main>
    </div>
  );
};

export default BillingPage;
