import { 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

import { CreateApplicationRequest, ApplicationStatus } from "@/types";

type ApplicationFormProps = {
    onSubmit?: (data: CreateApplicationRequest) => Promise<void>;
}

const APPLICATION_STATUSES: ApplicationStatus[] = [
    "APPLIED",
    "IN_PROGRESS",
    "INTERVIEW",
    "OFFER",
    "REJECTED",
    "GHOSTED",
    "WITHDRAWN",
];

export function ApplicationForm({onSubmit} : ApplicationFormProps) {
    const [formData, setFormData] = useState<CreateApplicationRequest>({
        jobTitle: "",
        company: "",
        jobLocation: undefined,
        jobUrl: undefined,
        status: "APPLIED",
        notes: undefined,
        description: undefined,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value || undefined,
        }));
    };

    const handleStatusChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            status: value as ApplicationStatus ,
        }));
    };

    return (
        <>
            <DialogHeader className="font-bold">
                <DialogTitle>
                    Job Application
                </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="e.g., Senior Software Engineer"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                        id="company"
                        name="company"
                        placeholder="e.g., Google"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="jobLocation">Job Location</Label>
                    <Input
                        id="jobLocation"
                        name="jobLocation"
                        placeholder="e.g., San Francisco, CA"
                        value={formData.jobLocation || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="jobUrl">Job URL</Label>
                    <Input
                        id="jobUrl"
                        name="jobUrl"
                        type="url"
                        placeholder="e.g., https://example.com/jobs/123"
                        value={formData.jobUrl || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status || ""} onValueChange={handleStatusChange}>
                        <SelectTrigger id="status">
                            <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                        <SelectContent>
                            {APPLICATION_STATUSES.map(status => (
                                <SelectItem key={status} value={status}>
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Job description or role details"
                        value={formData.description || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Your notes about this application"
                        value={formData.notes || ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button
                        disabled={!formData.jobTitle || !formData.company}
                        onClick={() => onSubmit && onSubmit(formData)}
                    >
                        Submit Application
                    </Button>
                </DialogClose>
            </DialogFooter>
        </>
    );
}