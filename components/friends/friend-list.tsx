import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, UserMinus } from "lucide-react";
import { useRouter } from "next/navigation";

type Friend = {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
};

interface FriendListProps {
  friends: Friend[];
}

export function FriendList({ friends }: FriendListProps) {
  const router = useRouter();

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {friends.map((friend) => (
        <Card key={friend.id} className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar>
                <AvatarImage src={friend.avatar} alt={friend.name} />
                <AvatarFallback>{friend.name[0]}</AvatarFallback>
              </Avatar>
              {friend.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{friend.name}</h3>
              <p className="text-xs text-muted-foreground">
                {friend.online ? "Online" : "Offline"}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push(`/chat?id=${friend.id}`)}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <UserMinus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}