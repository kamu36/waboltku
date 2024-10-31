import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

type Chat = {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  online: boolean;
};

interface ChatListProps {
  chats: Chat[];
  selectedChat: Chat;
  onSelectChat: (chat: Chat) => void;
}

export function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  return (
    <div className="w-80 border-r">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Messages</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-8rem)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={cn(
              "flex items-center space-x-4 p-4 hover:bg-accent cursor-pointer",
              selectedChat.id === chat.id && "bg-accent"
            )}
            onClick={() => onSelectChat(chat)}
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-semibold truncate">{chat.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(chat.timestamp), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}