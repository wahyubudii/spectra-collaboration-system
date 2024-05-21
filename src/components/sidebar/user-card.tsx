import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SpectraProfileIcon from "../icons/spectraProfileIcon";
import { LogoutButton } from "../global/logout-button";
import { Unlink, LogOut } from "lucide-react";
import { ModeToggle } from "../global/mode-toggle";
import { Subscription } from "@/lib/supabase/supabase.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import db from "@/lib/supabase/db";

interface UserCardProps {
  subscription: Subscription | null;
}

export default async function UserCard({ subscription }: UserCardProps) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;
  const response = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.id, user.id),
  });
  let avatarPath;
  if (!response) return;
  if (!response.avatarUrl) avatarPath = "";
  else {
    avatarPath = supabase.storage
      .from("avatars")
      .getPublicUrl(response.avatarUrl)?.data.publicUrl;
  }
  const profile = {
    ...response,
    avatarUrl: avatarPath,
  };

  return (
    <article className="hidden sm:flex justify-between items-center px-2 py-2 dark:bg-Neutrals/neutrals-12 rounded-3xl">
      <aside className="flex justify-center items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src={profile.avatarUrl} />
          <AvatarFallback>
            <SpectraProfileIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-muted-foreground text-xs font-semibold">
            {subscription?.status === "active" ? "Pro Plan" : "Free Plan"}
          </span>
          <small className="w-[100px] overflow-hidden overflow-ellipsis">
            {profile.email}
          </small>
        </div>
      </aside>
      <div className="flex items-center justify-center gap-1">
        <LogoutButton>
          <Unlink size={14} />
        </LogoutButton>
        <ModeToggle />
      </div>
    </article>
  );
}
