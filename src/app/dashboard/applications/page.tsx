import { ApplicationTable } from "@/components/applications/table/ApplicationTable";
import { ApplicationStats } from "@/components/applications/ApplicationStats";
import { ApplicationModal } from "@/components/applications/ApplicationModal";
// import { getApplications, getStats } from "@/lib/db/applications";

import type { Application } from "@/types";

import { sampleApplications } from "@/app/test_data/applications";

export default async function ApplicationsPage() {
  // const applications = await getApplications(searchParams);
  // const stats = await getStats();

  return (
    <div className="m-2">
      <div className="flex flex-col mb-6">
        <h1 className="text-3xl font-semibold mb-2">Job Applications Dashboard</h1>
        <ApplicationTable applications={sampleApplications} />
      </div>
    </div>
  );
}
