import { ApplicationTable } from "@/components/applications/table/ApplicationTable";
import { ApplicationStats } from "@/components/applications/ApplicationStats";
import { ApplicationModal } from "@/components/applications/ApplicationModal";
import { getAllApplications } from "@/lib/applications";

export default async function ApplicationsPage() {
  const applications = await getAllApplications();

  return (
    <>
      <div className="m-2">
        <div className="flex flex-col mb-6">
          <div className="m-2 flex items-center justify-between">
            <h1 className="text-3xl font-semibold mb-2">Job Applications Dashboard</h1>
            <ApplicationModal />
          </div>
          <ApplicationTable applications={applications} />
        </div>
      </div>
    </>
  );
}
