import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import SpectraHomeIcon from "../icons/spectraHomeIcon";
import SpectraSettingsIcon from "../icons/spectraSettingsIcon";
import SpectraTrashIcon from "../icons/spectraTrashIcon";
import Settings from "../settings/settings";
import Trash from "../trash/trash";

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
}

export default function NativeNavigation({
  myWorkspaceId,
  className,
}: NativeNavigationProps) {
  return (
    <nav className={twMerge("my-2", className)}>
      <ul className="flex flex-col gap-4">
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
          <li className="group/native flex items-center text-Neutrals/neutrals-7 transition-all gap-2 text-sm">
            <SpectraSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>

        <Trash>
          <li className="group/native flex items-center text-Neutrals/neutrals-7 transition-all gap-2 text-sm">
            <SpectraTrashIcon />
            <span>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  );
}
