"use client";

import { useSubscriptionModal } from "@/lib/providers/subscription-modal-provider";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import { useToast } from "../ui/use-toast";
import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/button";
import Loader from "./loader";

export default function SubscriptionModal() {
  const { open, setOpen } = useSubscriptionModal();
  const { subscription } = useSupabaseUser();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {subscription?.status === "active" ? (
        <DialogContent>Already on a paid plan!</DialogContent>
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Upgrade to a Pro Plan!
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            To access Pro features you need to have a paid plan.
          </DialogDescription>
          <div className="flex justify-between items-center">
            <React.Fragment>
              <b className="text-3xl text-foreground">
                $12.99 / <small>month</small>
              </b>
              <Button className="text-sm" disabled={isLoading}>
                {isLoading ? <Loader /> : "Upgrade"}
              </Button>
            </React.Fragment>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
