"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

interface EmojiPickerProps {
  isEdited?: boolean;
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
}

export default function EmojiPicker({
  children,
  getValue,
  isEdited,
}: EmojiPickerProps) {
  const route = useRouter();
  const Picker = dynamic(() => import("emoji-picker-react"));
  const onClick = (selectedEmoji: any) => {
    if (getValue) getValue(selectedEmoji.emoji);
  };

  return (
    <div className="flex items-center">
      <Popover>
        <PopoverTrigger className="cursor-pointer">{children}</PopoverTrigger>
        <PopoverContent className="p-0 border-none">
          {isEdited && <Picker onEmojiClick={onClick}></Picker>}
        </PopoverContent>
      </Popover>
    </div>
  );
}
