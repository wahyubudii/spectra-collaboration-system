import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import SpectraHomeIcon from "../icons/spectraHomeIcon";
import SpectraSettingsIcon from "../icons/spectraSettingsIcon";
import SpectraTrashIcon from "../icons/spectraTrashIcon";
import Settings from "../settings/settings";

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
  getSelectedElement?: (selection: string) => void;
}

export default function NativeNavigation({
  myWorkspaceId,
  className,
  getSelectedElement,
}: NativeNavigationProps) {
  return (
    <div className={twMerge("my-2", className)}>
      <ul className="flex flex-col gap-5">
        <li>
          <Link
            className="group/native flex items-center text-Neutrals/neutrals-7 transition-all gap-2 text-sm"
            href={`/dashboard/${myWorkspaceId}`}
          >
            <SpectraHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>
        <Settings>
          <li className="group/native flex items-center text-Neutrals/neutrals-7 transition-all gap-2 text-sm cursor-pointer">
            <SpectraSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>
        <li>
          <Link
            className="group/native flex items-center text-Neutrals/neutrals-7 transition-all gap-2 text-sm"
            href={`/dashboard/${myWorkspaceId}`}
          >
            <SpectraTrashIcon />
            <span>Trash</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
