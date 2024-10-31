"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

type Chat = {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
};

interface ChatWindowProps {
  chat: Chat;
}

export function ChatWindow({ chat }: ChatWindowProps) {
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Implement send message logic here
      setMessage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center space-x-4 p-4 border-b">
        <Avatar>
          <AvatarImage src={chat.avatar} alt={chat.name} />
          <AvatarFallback>{chat.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-semibold">{chat.name}</h3>
          <p className="text-xs text-muted-foreground">
            {chat.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages will be rendered here */}
      </div>
      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}