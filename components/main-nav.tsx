import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MessageCircle, Users, Image } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/chat"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/chat"
            ? "text-primary"
            : "text-muted-foreground"
        )}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Chat
      </Link>
      <Link
        href="/friends"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/friends"
            ? "text-primary"
            : "text-muted-foreground"
        )}
      >
        <Users className="mr-2 h-4 w-4" />
        Friends
      </Link>
      <Link
        href="/status"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/status"
            ? "text-primary"
            : "text-muted-foreground"
        )}
      >
        <Image className="mr-2 h-4 w-4" />
        Status
      </Link>
    </nav>
  );
}