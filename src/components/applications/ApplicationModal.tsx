"use client";

import { toast } from "sonner";
import { 
  Dialog,
  DialogContent, 
  DialogTrigger,
 } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { CreateApplicationRequest as ApplicationFormData, ApplicationModalProps } from "@/types/application";
import { Plus } from "lucide-react";

import { ApplicationForm } from "./ApplicationForm";

export function ApplicationModal(props: ApplicationModalProps) {

  async function onSubmit(formData: ApplicationFormData) {
    const res = await fetch("/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) toast.success("Application created!", {
      duration: 3000,
      action: {
        label: "Cool",
        onClick: () => toast.dismiss()
      },
      description: `${formData.jobTitle} at ${formData.company}`,
    });
    else {
      const errorBody = await res.json();
      console.error("Error creating application:", errorBody);
      toast.error("Error creating application.", {
        duration: 5000,
        action: {
          label: "Damnit",
          onClick: () => toast.dismiss()
        },
        description: `${errorBody.error || "Unknown error occurred."}`,
      });
  }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Plus />Add Application</Button>
      </DialogTrigger>
      <DialogContent>
        <ApplicationForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
