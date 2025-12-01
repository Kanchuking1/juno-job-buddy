import type { ApplicationStatus } from "@/types";
import { Badge } from "@/components/ui/badge";

type StatusBadgeProps = {
  status: ApplicationStatus;
};

const statusToBadge : {
    [key in ApplicationStatus]:  {
        variant: "outline" | "default" | "destructive" | "secondary",
        classes?: string
    }
} = {
    "APPLIED" : {
        variant: "outline"
    },
    "IN_PROGRESS" : {
        variant: "outline"
    }, 
    "INTERVIEW" : {
        variant: "outline"
    },
    "OFFER" : {
        variant: "default",
        classes: "bg-green-500 text-white"
    },
    "REJECTED" : {
        variant: "destructive"
    }, 
    "GHOSTED" : {
        variant: "outline",
        classes: "opacity-50"
    },
    "WITHDRAWN" : {
        variant: "outline",
        classes: "bg-red-500 text-white"
    }
};

export function StatusBadge({ status }: StatusBadgeProps) {
    return (
    <Badge
        variant={statusToBadge[status].variant}>
        {status}
    </Badge>)
}