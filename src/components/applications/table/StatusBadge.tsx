import type { ApplicationStatus } from "@/types";
import { Badge } from "@/components/ui/badge";

import { ArrowUpRight, ArrowDown, Album, PartyPopper, Ban, Activity, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type StatusBadgeProps = {
  status: ApplicationStatus;
};

const statusToBadge : {
    [key in ApplicationStatus]:  {
        variant: "outline" | "default" | "destructive" | "secondary",
        label: string,
        classes?: string
        icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    }
} = {
    "APPLIED" : {
        variant: "outline",
        icon: Album,
        label: "Applied"
    },
    "IN_PROGRESS" : {
        variant: "outline",
        icon: Activity,
        label: "In Progress"
    }, 
    "INTERVIEW" : {
        variant: "outline",
        icon: ArrowUpRight,
        label: "Interview"
    },
    "OFFER" : {
        variant: "default",
        classes: "bg-green-500 text-white",
        icon: PartyPopper,
        label: "Offer"
    },
    "REJECTED" : {
        variant: "destructive",
        icon: ArrowDown,
        label: "Rejected"
    }, 
    "GHOSTED" : {
        variant: "outline",
        classes: "opacity-50",
        icon: ArrowDown,
        label: "Ghosted"
    },
    "WITHDRAWN" : {
        variant: "outline",
        classes: "bg-red-500 text-white",
        icon: Ban,
        label: "Withdrawn"
    }
};

export function StatusBadge({ status }: StatusBadgeProps) {
        let Icon = statusToBadge[status].icon;
        if (!Icon) Icon = ArrowUpRight;
        const classes = `w-min-25 flex justify-around ${statusToBadge[status].classes ?? ""}`;

        return (
            <Badge variant={statusToBadge[status].variant} className={classes}>
                <Icon className="inline-block mr-1 h-4 w-4 align-text-bottom" />
                {statusToBadge[status].label}
            </Badge>
        );
}