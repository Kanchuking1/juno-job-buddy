"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ApplicationModal() {
  async function onSubmit(formData) {
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
        <Button>Add Application</Button>
      </DialogTrigger>

      <DialogContent>
        <ApplicationForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
