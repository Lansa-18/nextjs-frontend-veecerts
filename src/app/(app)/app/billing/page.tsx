import SubscriptionPackages from "@/components/molecules/m-subscription-packages";
import { H2 } from "@/components/ui/typography";

const BillingPage = () => {
  return (
    <div className="flex flex-col p-2 gap-4">
      <H2>Billing</H2>
      <SubscriptionPackages />
    </div>
  );
};

export default BillingPage;
