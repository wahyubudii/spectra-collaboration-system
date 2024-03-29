export const dynamic = "force-dynamic";

import React from "react";
import QuillEditor from "@/components/quill-editor/quill-editor";
import { redirect } from "next/navigation";
import { getFileDetails } from "@/lib/supabase/queries";

export default async function FilePage({
  params,
}: {
  params: { fileId: string };
}) {
  const { data, error } = await getFileDetails(params.fileId);
  if (error || !data.length) redirect("/dashboard");

  return (
    <div className="relative">
      <QuillEditor
        dirType="file"
        fileId={params.fileId}
        dirDetails={data[0] || {}}
      />
    </div>
  );
}
