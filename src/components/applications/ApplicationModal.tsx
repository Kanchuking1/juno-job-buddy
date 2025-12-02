"use client";

import { 
  Dialog,
  DialogContent, 
  DialogTrigger,
 } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { CreateApplicationRequest as ApplicationFormData, ApplicationModalProps } from "@/types/application";
import { Plus } from "lucide-react";

import { ApplicationForm } from "./ApplicationForm";

export function ApplicationModal(props: ApplicationModalProps) {

  async function onSubmit(formData: ApplicationFormData) {
    const res = await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) toast.success("Application created!");
    else toast.error("Error creating application.");
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
