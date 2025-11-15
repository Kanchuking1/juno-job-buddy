import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TestAuthPage() {
  const session = await getServerSession(authOptions);

  return (
    <pre style={{ padding: 40 }}>
      {JSON.stringify(session, null, 2)}
    </pre>
  );
}
