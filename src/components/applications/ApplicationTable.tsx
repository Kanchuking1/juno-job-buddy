export function ApplicationTable({ applications }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Job Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {applications.map((app) => (
          <TableRow key={app.id}>
            <TableCell>{app.jobTitle}</TableCell>
            <TableCell>{app.company}</TableCell>
            <TableCell>
              <StatusBadge status={app.status} />
            </TableCell>
            <TableCell>{new Date(app.appliedAt).toLocaleDateString()}</TableCell>
            <TableCell>
              <EditDropdown application={app} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
