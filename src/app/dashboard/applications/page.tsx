import { ApplicationTable } from "@/components/applications/ApplicationTable";
import { ApplicationStats } from "@/components/applications/ApplicationStats";
import { ApplicationModal } from "@/components/applications/ApplicationModal";
import { getApplications, getStats } from "@/lib/db/applications";

export default async function ApplicationsPage({ searchParams }) {
  const applications = await getApplications(searchParams);
  const stats = await getStats();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Applications</h1>
        <ApplicationModal />
      </div>

      <ApplicationStats stats={stats} />

      <ApplicationTable applications={applications} />
    </div>
  );
}
