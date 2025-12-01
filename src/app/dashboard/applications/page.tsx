import { ApplicationTable } from "@/components/applications/ApplicationTable";
import { ApplicationStats } from "@/components/applications/ApplicationStats";
import { ApplicationModal } from "@/components/applications/ApplicationModal";
// import { getApplications, getStats } from "@/lib/db/applications";

export default async function ApplicationsPage() {
  // const applications = await getApplications(searchParams);
  // const stats = await getStats();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Job Applications Dashboard</h1>
        {/* <ApplicationModal /> */}
      </div>
    </div>
  );
}
