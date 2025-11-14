export function ApplicationStats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="p-4 rounded-lg border bg-background">
          <p className="text-muted-foreground text-sm">{key}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      ))}
    </div>
  );
}
