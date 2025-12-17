import { Suspense } from "react";
import EnrollMemberClient from "./EnrollMemberClient";

export default function EnrollMemberPage() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
      <EnrollMemberClient />
    </Suspense>
  );
}
