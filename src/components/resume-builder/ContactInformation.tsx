import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactInformationTab(){
    return <div className="w-2/3 gap-3 grid grid-cols-2 max-w-sm">
        <div className="grid gap-2">
            <Label>First Name</Label>
            <Input placeholder="First Name"/>
        </div>
        <div className="grid gap-2">
            <Label>Last Name</Label>
            <Input placeholder="Last Name" />
        </div>
        <div className="grid gap-2">
            <Label>Phone Number</Label>
            <Input placeholder="+1 (123)-456-7890" type="tel" />
        </div>
        <div className="grid gap-2">
            <Label>Email</Label>
            <Input placeholder="something@gmail.com" type="email" />
        </div>
        <div className="grid gap-2">
            <Label>Linkedin</Label>
            <Input placeholder="linkedin.com/juno/" type="url" />
        </div>
        <div className="grid gap-2">
            <Label>Github</Label>
            <Input placeholder="github.com/juno/" type="url" />
        </div>
        <div className="grid gap-2">
            <Label>Portfolio</Label>
            <Input placeholder="juno-jb.com" type="url" />
        </div>
    </div>
}