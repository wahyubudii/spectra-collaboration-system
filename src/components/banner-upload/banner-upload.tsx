import {
  appFoldersType,
  appWorkspacesType,
} from "@/lib/providers/state-provider";
import { Folder, Workspace } from "@/lib/supabase/supabase.types";
import React from "react";
import CustomDialogTrigger from "../global/custom-dialog-trigger";
import BannerUploadForm from "./banner-upload-form";

interface BannerUploadProps {
  id: string;
  dirType: "workspace" | "file" | "folder";
  children: React.ReactNode;
  className?: string;
  // details: appWorkspacesType | appFoldersType | File | Workspace | Folder;
}

export default function BannerUpload({
  id,
  dirType,
  children,
  className,
}: // details,
BannerUploadProps) {
  return (
    <CustomDialogTrigger
      header="Upload Banner"
      content={<BannerUploadForm dirType={dirType} id={id} />}
      className={className}
    >
      {children}
    </CustomDialogTrigger>
  );
}
