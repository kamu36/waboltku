"use client";

import { useState } from "react";
import { ChatList } from "@/components/chat/chat-list";
import { ChatWindow } from "@/components/chat/chat-window";
import { dummyChats } from "@/lib/dummy-data";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);

  return (
    <div className="flex h-full">
      <ChatList
        chats={dummyChats}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
      />
      <ChatWindow chat={selectedChat} />
    </div>
  );
}