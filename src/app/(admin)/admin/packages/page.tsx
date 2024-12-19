"use client";

import SubscriptionPackageForm from "@/components/atoms/a-subscription-package-form";
import SubscriptionPackages from "@/components/molecules/m-subscription-packages";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { H2 } from "@/components/ui/typography";
import React from "react";
import StashPlusDuotone from "~icons/stash/plus-duotone.jsx";

const AdminPackagesPage = () => {
  const [formOpen, setFormOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4 p-2">
      <div>
        <H2 className="flex py-4 items-center justify-between">
          <span>Packages</span>

          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <StashPlusDuotone />
                New Package
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Package</DialogTitle>
              </DialogHeader>
              <SubscriptionPackageForm onSuccess={() => setFormOpen(false)} />
            </DialogContent>
          </Dialog>
        </H2>
      </div>
      <SubscriptionPackages />
    </div>
  );
};

export default AdminPackagesPage;
