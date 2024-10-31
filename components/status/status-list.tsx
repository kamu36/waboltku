import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageCircle, Share } from "lucide-react";

type Status = {
  id: string;
  userId: string;
  userName: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: {
    id: string;
    userId: string;
    userName: string;
    content: string;
    timestamp: string;
  }[];
};

interface StatusListProps {
  statuses: Status[];
}

export function StatusList({ statuses }: StatusListProps) {
  return (
    <div className="space-y-4">
      {statuses.map((status) => (
        <Card key={status.id}>
          <CardHeader className="flex flex-row items-center space-x-4 p-4">
            <Avatar>
              <AvatarImage src={`https://avatar.vercel.sh/${status.userId}`} />
              <AvatarFallback>{status.userName[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{status.userName}</h3>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(status.timestamp), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm">{status.content}</p>
            {status.image && (
              <img
                src={status.image}
                alt="Status"
                className="mt-4 rounded-lg w-full object-cover max-h-96"
              />
            )}
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="space-x-2">
                <Heart className="h-4 w-4" />
                <span>{status.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>{status.comments.length}</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}