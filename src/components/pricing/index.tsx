"use client";

import Image from "next/image";

interface PricingTabProps {
  planType: "personal" | "hobbie" | "professional";
  popular?: boolean;
  planName: string;
  planGb: string;
  className?: string;
  price: string;
  planDescription: string;
  features: string[];
  colorScheme: "blue" | "liblue";
}

function PricingTab(props: PricingTabProps) {
  const { colorScheme, className } = props;

  return (
    <div className={`w-[359px] h-[592px] p-2 ${props.popular ? "white" : ""}`}>
      <div className={`relative pt-14 flex ${className}  flex-col h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5`}>
        {props.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center text-xs font-semibold py-2 px-4 bg-gray-800 text-white rounded-full shadow-sm">
              Recommended
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="flex justify-between">
            <div className="text-slate-900 dark:text-slate-200 font-medium text-xl pb-4 mb-1">
              {props.planName}
            </div>
            <div className="bg-liblue w-[96px] h-[32px] rounded-lg text-center font-bold text-lg py-1 border-blue border-[1px]">
              {props.planGb}
            </div>
          </div>

          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
              $
            </span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
              {props.price}
            </span>
            <span className="font-medium">/ month</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">
            {props.planDescription}
          </div>
          <a
            className={`w-full inline-flex justify-center whitespace-nowrap font-bold rounded-lg ${
              colorScheme === "blue"
                ? "bg-blue text-white"
                : "bg-liblue text-black"
            } px-3.5 py-2.5 text-sm font-medium shadow-sm 
  } transition-colors duration-150`}
            href="#0"
          >
            Get started
          </a>
        </div>
        <ul className="text-slate-600 pt-6 dark:text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src="/Group 112.svg"
                  width={24}
                  height={24}
                  alt="Picture"
                />
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function PricingTable() {

  return (
    <div id="pricing">
      {/* Pricing toggle */}
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Pricing</h2>
      </div>
      {/* <div className="flex justify-start pl-20">
        <div className="relative flex w-[500px] p-3 bg-liblue rounded-full">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/3 bg-black rounded-full shadow-sm transform transition-transform duration-150 ease-in-out ${
                selectedPlan === "personal"
                  ? "translate-x-0"
                  : selectedPlan === "hobbie"
                    ? "translate-x-full"
                    : "translate-x-[200%]"
              }`}
            ></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
              selectedPlan === "personal" ? "text-white" : "text-black"
            }`}
            onClick={() => setSelectedPlan("personal")}
            aria-pressed={selectedPlan === "personal"}
          >
            Personal
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
              selectedPlan === "hobbie" ? "text-white" : "text-black"
            }`}
            onClick={() => setSelectedPlan("hobbie")}
            aria-pressed={selectedPlan === "hobbie"}
          >
            Hobbie
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ease-in-out ${
              selectedPlan === "professional" ? "text-white" : "text-black"
            }`}
            onClick={() => setSelectedPlan("professional")}
            aria-pressed={selectedPlan === "professional"}
          >
            Professional
          </button>
        </div>
      </div> */}

      <div>
        <div className="p-6 lg:p-2 lg:pt-12 max-w-screen-lg mx-auto grid lg:gap-24 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-start">
          {/* Pricing tab 1 */}
          <PricingTab
            planType="personal"
            planName="Lite"
            price={'0.0'}
            planDescription="Billed monthly"
            features={[
              "Get your internet identity",
              "Create personalized folders",
              "Upload documents",
              "Store documents",
            ]}
            planGb={"5GB"}
            colorScheme={"liblue"}
          />

          {/* Pricing tab 2 */}
          <PricingTab
            planType="hobbie"
            className={`border-2 border-gray-800`}
            popular={true}
            planName="Basic"
            price={'9.99'}
            planDescription="Billed monthly"
            features={[
              "Get your internet identity",
              "Create personalized folders",
              "Upload documents",
              "Store documents",
              "Mint your documents",
            ]}
            planGb={"100GB"}
            colorScheme={"blue"}
          />

          {/* Pricing tab 3 */}
          <PricingTab
            planType="professional"
            planName="Standard"
            price={'19.99'}
            planDescription="Billed monthly"
            features={[
              "Get your internet identity",
              "Create personalized folders",
              "Upload documents",
              "Store documents",
              "Mint your documents in batches",
              "Store as NFTs",
            ]}
            planGb={"200GB"}
            colorScheme={"liblue"}
          />
        </div>
      </div>
    </div>
  );
}
